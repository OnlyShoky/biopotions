import throatImg from './assets/throat.png';
import headImg from './assets/head.png';
import stomachImg from './assets/stomach.png';
import skinImg from './assets/skin.png';
import chestImg from './assets/chest.png';

export const bodyPartsData = [
    {
        "_id": "1",
        "bodyPart": "Throat",
        "image": throatImg,
        "ailments": [
            {
                "name": "Sore Throat",
                "remedies": [
                    { "name": "Honey with lemon", "description": "Soothes irritation and provides Vitamin C.", "preparation": "Mix 1 tbsp honey and 1 tbsp lemon juice in warm water.", "warnings": "Do not give honey to infants under 1 year." },
                    { "name": "Ginger tea", "description": "Anti-inflammatory properties help reduce swelling.", "preparation": "Steep fresh ginger slices in boiling water for 10 mins.", "warnings": "Can cause heartburn in some people." },
                    { "name": "Saltwater gargle", "description": "Draws out fluids and reduces swelling.", "preparation": "Dissolve 1/2 tsp salt in a glass of warm water. Gargle and spit.", "warnings": "Do not swallow." }
                ]
            },
            {
                "name": "Irritated Tonsils",
                "remedies": [
                    { "name": "Chamomile tea", "description": "Relaxing and anti-inflammatory.", "preparation": "Brew chamomile tea bag in hot water.", "warnings": "Check for ragweed allergies." },
                    { "name": "Warm honey water", "description": "Coats the throat and reduces irritation.", "preparation": "Mix warm water with a spoon of honey.", "warnings": "Avoid if diabetic (monitor sugar)." }
                ]
            }
        ]
    },
    {
        "_id": "2",
        "bodyPart": "Head",
        "image": headImg,
        "ailments": [
            {
                "name": "Headache",
                "remedies": [
                    { "name": "Peppermint tea", "description": "Menthol helps relax muscles and ease pain.", "preparation": "Brew peppermint leaves or tea bag.", "warnings": "May worsen acid reflux." },
                    { "name": "Cold compress", "description": "Numbs the area and constricts blood vessels.", "preparation": "Apply a cold pack to the forehead for 15 mins.", "warnings": "Do not apply ice directly to skin." },
                    { "name": "Ginger water", "description": "Reduces inflammation and nausea.", "preparation": "Boil ginger in water and drink warm.", "warnings": "Mild blood thinning effect." }
                ]
            },
            {
                "name": "Migraine",
                "remedies": [
                    { "name": "Lavender oil inhalation", "description": "Calming scent reduces stress and pain.", "preparation": "Inhale from bottle or use a diffuser.", "warnings": "Ensure proper ventilation." },
                    { "name": "Magnesium-rich foods", "description": "Magnesium deficiency is linked to migraines.", "preparation": "Eat almonds, spinach, or pumpkin seeds.", "warnings": "Consult doctor before supplements." }
                ]
            }
        ]
    },
    {
        "_id": "3",
        "bodyPart": "Stomach",
        "image": stomachImg,
        "ailments": [
            {
                "name": "Indigestion",
                "remedies": [
                    { "name": "Warm water with lemon", "description": "Stimulates digestion.", "preparation": "Squeeze lemon into warm water.", "warnings": "Acidic, rinse mouth after." },
                    { "name": "Mint tea", "description": "Relaxes stomach muscles.", "preparation": "Steep fresh mint or tea bag.", "warnings": "Avoid if you have GERD." }
                ]
            },
            {
                "name": "Nausea",
                "remedies": [
                    { "name": "Ginger tea", "description": "Proven to reduce nausea.", "preparation": "Steep ginger in hot water.", "warnings": "Safe for pregnancy in moderation." },
                    { "name": "Crushed mint leaves", "description": "Aroma helps settle the stomach.", "preparation": "Crush leaves and inhale or chew.", "warnings": "None." }
                ]
            }
        ]
    },
    {
        "_id": "4",
        "bodyPart": "Skin",
        "image": skinImg,
        "ailments": [
            {
                "name": "Dry Skin",
                "remedies": [
                    { "name": "Coconut oil", "description": "Deeply moisturizes skin.", "preparation": "Apply thin layer to affected area.", "warnings": "Avoid if prone to clogged pores." },
                    { "name": "Aloe vera gel", "description": "Hydrates and soothes.", "preparation": "Apply fresh gel from leaf.", "warnings": "Patch test first." }
                ]
            },
            {
                "name": "Acne",
                "remedies": [
                    { "name": "Tea tree oil", "description": "Antibacterial properties.", "preparation": "Dilute with carrier oil and dab on spots.", "warnings": "Never use undiluted." },
                    { "name": "Warm honey mask", "description": "Antibacterial and moisturizing.", "preparation": "Apply honey to face, leave for 10 mins, rinse.", "warnings": "Sticky mess!" }
                ]
            }
        ]
    },
    {
        "_id": "5",
        "bodyPart": "Chest",
        "image": chestImg,
        "ailments": [
            {
                "name": "Chest Congestion",
                "remedies": [
                    { "name": "Eucalyptus steam", "description": "Loosens mucus.", "preparation": "Add oil drops to hot water, inhale steam.", "warnings": "Keep eyes closed." },
                    { "name": "Honey and ginger syrup", "description": "Expectorant properties.", "preparation": "Mix ginger juice and honey.", "warnings": "Spicy taste." }
                ]
            }
        ]
    }
];
