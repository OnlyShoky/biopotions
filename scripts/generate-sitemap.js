const fs = require('fs');
const path = require('path');

const DATA_FILE_PATH = path.join(__dirname, '../client/src/data.js');
const OUTPUT_FILE_PATH = path.join(__dirname, '../client/public/sitemap.xml');
const BASE_URL = 'https://biopotions.netlify.app';

function generateSitemap() {
    console.log('Reading data file...');
    try {
        const dataContent = fs.readFileSync(DATA_FILE_PATH, 'utf8');

        // Extract Ingredients IDs
        const ingredientMatches = [...dataContent.matchAll(/_id:\s*'((ing-[^']+))'/g)];
        const ingredientIds = ingredientMatches.map(m => m[1]);
        console.log(`Found ${ingredientIds.length} ingredients.`);

        // Extract Body Parts (English names)
        // Pattern matches: bodyPart: { en: 'Name'
        const bodyPartMatches = [...dataContent.matchAll(/bodyPart:\s*\{\s*en:\s*'([^']+)'/g)];
        const bodyParts = bodyPartMatches.map(m => m[1]);
        console.log(`Found ${bodyParts.length} body parts.`);

        // Extract Ailments (English names)
        // Ailments are nested, but we can search for the pattern "name: { en: 'Name' }"
        // However, this pattern is also used for ingredients and body parts.
        // We need to be more specific or filter duplicates.
        // Given the structure, ailments are inside `ailments: [ ... ]`.
        // Let's try to capture all "name: { en: '...'" and filter out those that are known body parts or ingredients names.
        // Actually, ingredients use "name: { en: ... }", and body parts use "bodyPart: { en: ... }".
        // So "name: { en: ... }" mostly captures ingredients and ailments.
        // But we have ingredient IDs for URLs, so we don't need ingredient *names* for URLs.
        // We need ailment names.

        // Let's refine the search. We can iterate over the file content line by line or use a more complex regex.
        // But regex for nested structures is hard. 
        // Let's look at the structure again:
        //      ailments: [
        //          {
        //              name: { en: 'Dry Eyes', ... },

        // We can match `name: { en: '([^']+)'` and collect ALL names.
        // Then we filter out names that are likely ingredients (we can check valid ingredient names from the pattern extraction if needed, but ingredients URLs use ID).
        // Wait, ingredients DO have `name: { en: ... }` property.
        // Let's first collect all `name: { en: ... }` matches.

        const allNamesMatches = [...dataContent.matchAll(/name:\s*\{\s*en:\s*'([^']+)'/g)];
        const allNames = allNamesMatches.map(m => m[1]);

        // Ingredients also have this property. 
        // We can try to identify ingredient names to exclude them, OR 
        // simpler: The URLs for ailments are /ailment/<name>.
        // The URLs for ingredients are /ingredient/<id>.
        // If we generate /ailment/<IngredientName>, it might be a 404 or just weird if the router doesn't handle it, 
        // or effectively it checks if it's a valid ailment.
        // Ideally we only want real ailments.

        // Better approach:
        // Use the indentation or context. 
        // Ailments are usually inside `ailments: [` array.
        // Let's try to capture the `ailments` array blocks if possible, but that's hard with regex.

        // Alternative: List of known ingredients names to exclude?
        // Let's extract ingredient names too to filter them out.
        // We can match ingredient definitions: _id: '...', name: { en: '...' }
        // The file is structured with ingredients first, then body parts with ailments.

        // Let's use the fact that ingredients are in `export const ingredientsData = [...]` and body parts in `export const bodyPartsData = [...]`.
        // We can split the file content.

        const parts = dataContent.split('export const bodyPartsData =');
        if (parts.length < 2) {
            console.error('Could not split file into ingredients and body parts sections.');
            // Fallback: use all names but basic filtering
        }

        const ingredientsSection = parts[0];
        const bodyPartsSection = parts[1] || '';

        // Extract Ailments ONLY from body parts section
        // In bodyPartsData, "name: { en: ... }" is used for Ailments and Remedies.
        // Wait, remedies also have names: "name: { en: 'Cucumber Slices' ... }"
        // Do we have routes for remedies? 
        // Checking App.js:
        // <Route path="/ailment/:name" element={<AilmentDetails />} />
        // There is NO route for remedies. Only Ailments.
        // Ailment object: { name: { en: 'Dry Eyes' }, remedies: [...] }
        // Remedy object: { name: { en: 'Cucumber Slices' }, ... }

        // So we need to distinguish Ailment names from Remedy names.
        // Structure:
        // ailments: [
        //    {
        //       name: { en: 'Ailment Name' },
        //       remedies: [
        //          { name: { en: 'Remedy Name' } }
        //       ]
        //    }
        // ]

        // Regex hack: Ailments are direct children of `ailments: [`. 
        // Usually indented with 12 spaces or so. Remedies deeper.
        // OR: Ailments are followed by `remedies: [`.
        // Remedies are followed by `description: {`.

        // Let's look for `name: { en: '([^']+)' },` followed optionally by newlines then `remedies:`.
        // This is tricky with regex because of multiline.

        // Let's try to capture `name: { en: 'X' }` where `remedies:` follows within reasonable distance?
        // Actually, `matchAll` doesn't support "lookahead across many lines" easily without `s` flag and careful crafting.

        // Simple heuristic:
        // In `bodyPartsData`:
        // Level 1: Body Part (defined by `bodyPart: { en: ... }`) -> We already have this.
        // Level 2: Ailment (defined by `name: { en: ... }`) -> has `remedies` property.
        // Level 3: Remedy (defined by `name: { en: ... }`) -> has `ingredients` property.

        // So:
        // If a name block is followed by `remedies:`, it's an ailment.
        // If a name block is followed by `description:` or `preparation:`, it COULD be an ailment or remedy, but if it has `ingredients:` later it is definitely a remedy.

        // Let's use a simpler heuristic for now.
        // We will match `name: { en: '([^']+)' },`
        // And then check if the *next* property key nearby is `remedies`.

        // We can do this by regexing the whole string and looking for patterns like:
        // `name: \{ en: '([^']+)' \},\s+remedies:` 
        // (assuming formatting is consistent with newlines and spaces)

        // Let's try matching with flexible whitespace.
        const ailmentMatches = [...bodyPartsSection.matchAll(/name:\s*\{\s*en:\s*'([^']+)'\s*\}\s*,\s*remedies:/g)];
        // Note: The comma might not be there if it's the last property, but usually `remedies` follows `name` or `image` or `description`.
        // In the file viewed:
        // name: { en: 'Dry Eyes', ... },
        // remedies: [

        // There is usually ONLY `name` before `remedies`? No, check file.
        // Line 1824: name: { en: 'Dry Eyes', ... },
        // Line 1825: remedies: [
        // So yes, `name` object closes, comma, newline, `remedies`.

        // Let's try this regex:
        // /name:\s*\{\s*en:\s*'([^']+)'\s*(?:,[^}]*)?\}\s*,\s*remedies:/g
        // Simplified: name: { en: 'Name' }, (whitespace) remedies:

        const ailmentNames = [];
        // Since JS regex don't strictly support "dot matches newline" without flag (which matchAll supports if passed in regex),
        // we use [\s\S]*? or similar, but simpler: pass `s` flag isn't default in older node? Node 14+ is fine.
        // Let's use `[\s\S]` for whitespace including newlines.

        const ailmentRegex = /name:\s*\{\s*en:\s*'([^']+)'[^}]*\}\s*,\s*remedies:/g;
        // The `[^}]*` is risky if `en` is not the last key in name object. 
        // In the file: `name: { en: '...', es: '...', fr: '...' },`
        // So we need to skip until the closing brace of `name` object.

        // New Strategy:
        // 1. Get bodyPartsSection.
        // 2. Regex for `name: { en: '...' ... },`
        // 3. Check what follows immediately.

        let match;
        const potentialNameRegex = /name:\s*\{\s*en:\s*'([^']+)'/g;
        while ((match = potentialNameRegex.exec(bodyPartsSection)) !== null) {
            const name = match[1];
            const index = match.index + match[0].length;
            const followingText = bodyPartsSection.substring(index, index + 500); // 500 chars context
            // check if `remedies:` appears before `ingredients:` or `preparation:` or `description` closing the object?
            // Actually, remedies is a sibling of name.
            if (followingText.includes('remedies:')) {
                // Determine if it's "close enough" to be the sibling property.
                // If we see `ingredients:` before `remedies:`, it's not an ailment (it's a remedy).
                // If we see `preparation:` before `remedies:`, same.

                const remediesIndex = followingText.indexOf('remedies:');
                const ingredientsIndex = followingText.indexOf('ingredients:');
                const preparationIndex = followingText.indexOf('preparation:');

                // If remedies is first, it's an ailment.
                // Note: deeply nested remedies don't have `remedies` property.
                // So if `remedies:` exists at all in the immediate context (before complex closing), it's likely the ailment.

                // Safety check: is remediesIndex closer than the start of a new object?
                // Just checking if it exists is a strong signal because Remedies don't have a `remedies` field.
                // Only Ailments have `remedies` field.
                // BUT, the context lookahead might see the `remedies` field of a *parent* or *sibling*?
                // No, we are looking forward. 
                // A remedy object is inside `remedies: [...]`. It ends, then next ailment starts.
                // Ailment definition: name: ..., remedies: [...]

                // Risk: A remedy name is matched. Following text is `description: ..., preparation: ...`.
                // It does NOT contain `remedies:` usually. 
                // UNLESS we look too far and find the Next Ailment's `remedies:` property.
                // But the Next Ailment's `remedies` property would be preceded by the Next Ailment's `name`.
                // So if we find `remedies:` BEFORE we find another `name:`, then it belongs to THIS name.

                const nextNameIndex = followingText.indexOf('name:');
                if (remediesIndex !== -1) {
                    if (nextNameIndex === -1 || remediesIndex < nextNameIndex) {
                        // It's formatted as Name ... Remedies.
                        ailmentNames.push(name);
                    }
                }
            }
        }

        console.log(`Found ${ailmentNames.length} ailments.`);

        // Static Routes
        const staticRoutes = [
            '/',
            '/top-ingredients',
            '/favorites',
            '/about'
        ];

        let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

        // Add Static Routes
        staticRoutes.forEach(route => {
            sitemapContent += `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`;
        });

        // Add Ingredients
        ingredientIds.forEach(id => {
            sitemapContent += `  <url>
    <loc>${BASE_URL}/ingredient/${id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
        });

        // Add Body Parts
        bodyParts.forEach(bp => {
            // Encode URI components just in case
            sitemapContent += `  <url>
    <loc>${BASE_URL}/bodypart/${encodeURIComponent(bp)}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
        });

        // Add Ailments
        ailmentNames.forEach(ailment => {
            sitemapContent += `  <url>
    <loc>${BASE_URL}/ailment/${encodeURIComponent(ailment)}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
        });

        sitemapContent += `</urlset>`;

        fs.writeFileSync(OUTPUT_FILE_PATH, sitemapContent);
        console.log(`Sitemap generated at ${OUTPUT_FILE_PATH}`);

    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

generateSitemap();
