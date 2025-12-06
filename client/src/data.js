import throatImg from './assets/throat.png';
import headImg from './assets/head.png';
import stomachImg from './assets/stomach.png';
import skinImg from './assets/skin.png';
import chestImg from './assets/chest.png';
import eyesImg from './assets/eyes.png';
import backImg from './assets/back.png';
import legsImg from './assets/legs.png';

// Ingredient Images
// import honeyImg from './assets/ingredients/honey.png';
// import lemonImg from './assets/ingredients/lemon.png';
// import saltImg from './assets/ingredients/salt.png';
// import peppermintImg from './assets/ingredients/peppermint.png';
// import gingerImg from './assets/ingredients/ginger.png';

export const ingredientsData = [
    {
        _id: 'ing-honey',
        name: { en: 'Honey', es: 'Miel', fr: 'Miel' },
        scientificName: 'Apis mellifera',
        description: {
            en: 'Natural sweetener with antibacterial and soothing properties',
            es: 'Endulzante natural con propiedades antibacterianas y suavizantes',
            fr: 'Édulcorant naturel aux propriétés antibactériennes et apaisantes'
        },
        properties: [
            { property: { en: 'Antibacterial', es: 'Antibacteriano', fr: 'Antibactérien' }, description: { en: 'Kills harmful bacteria', es: 'Mata bacterias dañinas', fr: 'Tue les bactéries nocives' } },
            { property: { en: 'Soothing', es: 'Suavizante', fr: 'Apaisant' }, description: { en: 'Coats the throat', es: 'Recubre la garganta', fr: 'Tapisse la gorge' } }
        ],
        dosage: { en: '1-2 tbsp/day', es: '1-2 cdas/día', fr: '1-2 c. à soupe/jour' },
        warnings: { en: 'Not for children under 1. May contain botulism spores.', es: 'No para niños <1 año. Puede contener esporas de botulismo.', fr: 'Pas pour enfants <1 an. Peut contenir spores de botulisme.' },
        category: 'food',
        safetyRating: 1,
        versatilityScore: 9,
        commonUses: ['Sore Throat', 'Cough', 'Wounds', 'Skin Hydration'],
        tags: ['quran', 'science', 'hadith'],
        sources: [
            { type: 'quran', source: 'Surah An-Nahl 16:69', url: 'https://quran.com/an-nahl/69' },
            { type: 'hadith', source: 'Sahih al-Bukhari 5684', url: 'https://sunnah.com/bukhari:5684' },
            { type: 'science', source: 'Antibacterial activity of honey', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3609166/' }
        ]
    },
    {
        _id: 'ing-lemon',
        name: { en: 'Lemon', es: 'Limón', fr: 'Citron' },
        scientificName: 'Citrus limon',
        description: {
            en: 'Rich in Vitamin C and antioxidants.',
            es: 'Rico en Vitamina C y antioxidantes.',
            fr: 'Riche en Vitamine C et antioxydants.'
        },
        properties: [
            { property: { en: 'Antioxidant', es: 'Antioxidante', fr: 'Antioxydant' }, description: { en: 'Boosts immune system', es: 'Refuerza el sistema inmunológico', fr: 'Renforce le système immunitaire' } },
            { property: { en: 'Alkalizing', es: 'Alcalinizante', fr: 'Alcalinisant' }, description: { en: 'Balances pH', es: 'Equilibra el pH', fr: 'Équilibre le pH' } }
        ],
        dosage: { en: 'As needed', es: 'Según sea necesario', fr: 'Au besoin' },
        category: 'food',
        safetyRating: 1,
        versatilityScore: 9,
        commonUses: ['Cough', 'Sore Throat', 'Digestion', 'Immunity'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Vitamin C and immune function', url: 'https://pubmed.ncbi.nlm.nih.gov/29099763/' },
            { type: 'history', source: 'Used by sailors for scurvy since 1747' }
        ]
    },
    {
        _id: 'ing-garlic',
        name: { en: 'Garlic', es: 'Ajo', fr: 'Ail' },
        scientificName: 'Allium sativum',
        description: {
            en: 'Potent natural antibiotic and cardiovascular aid.',
            es: 'Potente antibiótico natural y ayuda cardiovascular.',
            fr: 'Puissant antibiotique naturel et aide cardiovasculaire.'
        },
        properties: [
            { property: { en: 'Antibiotic', es: 'Antibiótico', fr: 'Antibiotique' }, description: { en: 'Fights infections', es: 'Combate infecciones', fr: 'Combat les infections' } },
            { property: { en: 'Cardiovascular', es: 'Cardiovascular', fr: 'Cardiovasculaire' }, description: { en: 'Lowers blood pressure', es: 'Baja la presión arterial', fr: 'Abaisse la tension artérielle' } }
        ],
        dosage: { en: '1-2 cloves raw', es: '1-2 dientes crudos', fr: '1-2 gousses crues' },
        category: 'food',
        safetyRating: 1,
        versatilityScore: 8,
        commonUses: ['Infections', 'High Blood Pressure', 'Colds'],
        tags: ['science', 'history', 'bible'],
        sources: [
            { type: 'science', source: 'Cardiovascular benefits of garlic', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC139960/' },
            { type: 'history', source: 'Used in Ancient Egypt for strength', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3249897/' },
            { type: 'bible', source: 'Numbers 11:5' }
        ]
    },
    {
        _id: 'ing-ginger',
        name: { en: 'Ginger', es: 'Jengibre', fr: 'Gingembre' },
        scientificName: 'Zingiber officinale',
        description: {
            en: 'Spicy root known for digestive benefits.',
            es: 'Raíz picante conocida por sus beneficios digestivos.',
            fr: 'Racine épicée connue pour ses bienfaits digestifs.'
        },
        properties: [
            { property: { en: 'Anti-inflammatory', es: 'Antiinflamatorio', fr: 'Anti-inflammatoire' }, description: { en: 'Reduces swelling', es: 'Reduce la hinchazón', fr: 'Réduit l\'enflure' } },
            { property: { en: 'Antiemetic', es: 'Antiemético', fr: 'Antiémétique' }, description: { en: 'Prevents nausea', es: 'Previene las náuseas', fr: 'Prévient les nausées' } }
        ],
        dosage: { en: '1-2 slices fresh', es: '1-2 rodajas fresco', fr: '1-2 tranches frais' },
        category: 'spice',
        safetyRating: 1,
        versatilityScore: 8,
        commonUses: ['Nausea', 'Digestion', 'Inflammation', 'Colds'],
        tags: ['science', 'quran', 'history'],
        sources: [
            { type: 'quran', source: 'Surah Al-Insan 76:17', url: 'https://quran.com/76/17' },
            { type: 'science', source: 'Ginger for nausea and vomiting', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3995184/' },
            { type: 'history', source: 'Used in TCM for 5000 years' }
        ]
    },
    {
        _id: 'ing-chamomile',
        name: { en: 'Chamomile', es: 'Manzanilla', fr: 'Camomille' },
        scientificName: 'Matricaria chamomilla',
        description: {
            en: 'Gentle flower with calming effects.',
            es: 'Flor suave con efectos calmantes.',
            fr: 'Fleur douce aux effets calmants.'
        },
        properties: [
            { property: { en: 'Sedative', es: 'Sedante', fr: 'Sédatif' }, description: { en: 'Promotes sleep and relaxation', es: 'Promueve el sueño y la relajación', fr: 'Favorise le sommeil et la relaxation' } },
            { property: { en: 'Digestive', es: 'Digestivo', fr: 'Digestif' }, description: { en: 'Soothes stomach', es: 'Calma el estómago', fr: 'Apaise l\'estomac' } }
        ],
        dosage: { en: '1 cup tea', es: '1 taza de té', fr: '1 tasse de thé' },
        category: 'herb',
        safetyRating: 1,
        versatilityScore: 8,
        commonUses: ['Insomnia', 'Anxiety', 'Indigestion'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Chamomile for extraction of sleep', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2995283/' },
            { type: 'history', source: 'Used by ancient Egyptians for fever' }
        ]
    },
    {
        _id: 'ing-aloe',
        name: { en: 'Aloe Vera', es: 'Aloe Vera', fr: 'Aloe Vera' },
        scientificName: 'Aloe barbadensis miller',
        description: {
            en: 'Succulent plant with healing gel.',
            es: 'Planta suculenta con gel curativo.',
            fr: 'Plante succulente au gel cicatrisant.'
        },
        properties: [
            { property: { en: 'Cicatrizing', es: 'Cicatrizante', fr: 'Cicatrisant' }, description: { en: 'Heals wounds', es: 'Cura heridas', fr: 'Guérit les plaies' } },
            { property: { en: 'Moisturizing', es: 'Hidratante', fr: 'Hydratant' }, description: { en: 'Hydrates skin', es: 'Hidrata la piel', fr: 'Hydrate la peau' } }
        ],
        dosage: { en: 'Apply liberally', es: 'Aplicar generosamente', fr: 'Appliquer généreusement' },
        category: 'herb',
        safetyRating: 1,
        versatilityScore: 8,
        commonUses: ['Burns', 'Skin Irritation', 'Wounds'],
        tags: ['science', 'bible', 'history'],
        sources: [
            { type: 'bible', source: 'John 19:39' },
            { type: 'science', source: 'Aloe vera in dermatology', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2763764/' },
            { type: 'history', source: 'Known as "plant of immortality" in Egypt' }
        ]
    },
    {
        _id: 'ing-acv',
        name: { en: 'Apple Cider Vinegar', es: 'Vinagre de Manzana', fr: 'Vinaigre de Cidre' },
        scientificName: 'Malus domestica acetum',
        description: {
            en: 'Fermented apple juice with acetic acid.',
            es: 'Jugo de manzana fermentado con ácido acético.',
            fr: 'Jus de pomme fermenté avec de l\'acide acétique.'
        },
        properties: [
            { property: { en: 'Antimicrobial', es: 'Antimicrobiano', fr: 'Antimicrobien' }, description: { en: 'Kills pathogens', es: 'Mata patógenos', fr: 'Tue les agents pathogènes' } },
            { property: { en: 'pH Balancing', es: 'Equilibrio de pH', fr: 'Équilibrage du pH' }, description: { en: 'Restores acidity', es: 'Restaura la acidez', fr: 'Restaure l\'acidité' } }
        ],
        dosage: { en: '1-2 tbsp diluted', es: '1-2 cdas diluidas', fr: '1-2 c. à soupe diluées' },
        category: 'food',
        safetyRating: 2,
        versatilityScore: 7,
        commonUses: ['Digestion', 'Sore Throat', 'Skin Toner'],
        tags: ['science', 'history', 'hadith'],
        sources: [
            { type: 'hadith', source: 'Sunan Ibn Majah 3318 (Vinegar)', url: 'https://sunnah.com/ibnmajah:3318' },
            { type: 'science', source: 'Antimicrobial activity of ACV', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5788933/' },
            { type: 'history', source: 'Used by Hippocrates for cleaning wounds' }
        ]
    },
    {
        _id: 'ing-turmeric',
        name: { en: 'Turmeric', es: 'Cúrcuma', fr: 'Curcuma' },
        scientificName: 'Curcuma longa',
        description: {
            en: 'Bright yellow spice with strong anti-inflammatory effects.',
            es: 'Especia amarilla brillante con fuertes efectos antiinflamatorios.',
            fr: 'Épice jaune vif aux effets anti-inflammatoires puissants.'
        },
        properties: [
            { property: { en: 'Anti-inflammatory', es: 'Antiinflamatorio', fr: 'Anti-inflammatoire' }, description: { en: 'Reduces joint pain', es: 'Reduce dolor articular', fr: 'Réduit les douleurs articulaires' } },
            { property: { en: 'Antioxidant', es: 'Antioxidante', fr: 'Antioxydant' }, description: { en: 'Fights free radicals', es: 'Combate radicales libres', fr: 'Combat les radicaux libres' } }
        ],
        dosage: { en: '1 tsp powder', es: '1 cdita polvo', fr: '1 c. à café poudre' },
        category: 'spice',
        safetyRating: 1,
        versatilityScore: 7,
        commonUses: ['Inflammation', 'Joint Pain', 'Digestion'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Curcumin: A Review', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5664031/' },
            { type: 'history', source: 'Staple in Ayurvedic medicine for 4000 years' }
        ]
    },
    {
        _id: 'ing-salt',
        name: { en: 'Sea Salt', es: 'Sal Marina', fr: 'Sel Marin' },
        scientificName: 'Sodium chloride',
        description: {
            en: 'Natural mineral with antiseptic properties.',
            es: 'Mineral natural con propiedades antisépticas.',
            fr: 'Minéral naturel aux propriétés antiseptiques.'
        },
        properties: [
            { property: { en: 'Antiseptic', es: 'Antiséptico', fr: 'Antiseptique' }, description: { en: 'Cleanses wounds', es: 'Limpia heridas', fr: 'Nettoie les plaies' } },
            { property: { en: 'Exfoliant', es: 'Exfoliante', fr: 'Exfoliant' }, description: { en: 'Removes dead skin', es: 'Elimina piel muerta', fr: 'Élimine les peaux mortes' } }
        ],
        dosage: { en: '1/2 tsp for gargle', es: '1/2 cdita para gárgaras', fr: '1/2 c. à café pour gargarisme' },
        category: 'mineral',
        safetyRating: 1,
        versatilityScore: 7,
        commonUses: ['Sore Throat', 'Wounds', 'Nasal Congestion'],
        tags: ['bible', 'science', 'history'],
        sources: [
            { type: 'bible', source: 'Matthew 5:13 (Metaphorical)', url: 'https://www.biblegateway.com/passage/?search=Matthew+5%3A13&version=KJV' },
            { type: 'science', source: 'Saline irrigation for rhinosinusitis', url: 'https://pubmed.ncbi.nlm.nih.gov/22769666/' },
            { type: 'history', source: 'Used for food preservation and health globally' }
        ]
    },
    {
        _id: 'ing-coconut-oil',
        name: { en: 'Coconut Oil', es: 'Aceite de Coco', fr: 'Huile de Coco' },
        scientificName: 'Cocos nucifera',
        description: {
            en: 'Fatty oil with moisturizing and antimicrobial properties.',
            es: 'Aceite graso con propiedades hidratantes y antimicrobianas.',
            fr: 'Huile grasse aux propriétés hydratantes et antimicrobiennes.'
        },
        properties: [
            { property: { en: 'Moisturizing', es: 'Hidratante', fr: 'Hydratant' }, description: { en: 'Deeply hydrates', es: 'Hidrata profundamente', fr: 'Hydrate en profondeur' } },
            { property: { en: 'Antimicrobial', es: 'Antimicrobiano', fr: 'Antimicrobien' }, description: { en: 'Fights bacteria', es: 'Combate bacterias', fr: 'Combat les bactéries' } }
        ],
        dosage: { en: 'Apply topically', es: 'Aplicar tópicamente', fr: 'Appliquer localement' },
        category: 'food',
        safetyRating: 1,
        versatilityScore: 7,
        commonUses: ['Dry Skin', 'Hair Care', 'Energy'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Anti-inflammatory and skin barrier repair', url: 'https://pubmed.ncbi.nlm.nih.gov/20523108/' },
            { type: 'history', source: 'Ayurvedic pulling oil' }
        ]
    },
    {
        _id: 'ing-baking-soda',
        name: { en: 'Baking Soda', es: 'Bicarbonato de Sodio', fr: 'Bicarbonate de Soude' },
        scientificName: 'Sodium bicarbonate',
        description: {
            en: 'Alkaline compound used as antacid and cleaner.',
            es: 'Compuesto alcalino usado como antiácido y limpiador.',
            fr: 'Composé alcalin utilisé comme antiacide et nettoyant.'
        },
        properties: [
            { property: { en: 'Antacid', es: 'Antiácido', fr: 'Antiacide' }, description: { en: 'Neutralizes acid', es: 'Neutraliza el ácido', fr: 'Neutralise l\'acide' } },
            { property: { en: 'Exfoliant', es: 'Exfoliante', fr: 'Exfoliant' }, description: { en: 'Gentle scrub', es: 'Exfoliante suave', fr: 'Gommage doux' } }
        ],
        dosage: { en: '1/2 tsp in water', es: '1/2 cdita en agua', fr: '1/2 c. à café dans l\'eau' },
        category: 'mineral',
        safetyRating: 2,
        versatilityScore: 6,
        commonUses: ['Heartburn', 'Insect Bites', 'Exfoliation'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Sodium bicarbonate and heartburn', url: 'https://pubmed.ncbi.nlm.nih.gov/2660472/' },
            { type: 'history', source: 'Used in ancient Egypt (Natron)' }
        ]
    },
    {
        _id: 'ing-cinnamon',
        name: { en: 'Cinnamon', es: 'Canela', fr: 'Cannelle' },
        scientificName: 'Cinnamomum verum',
        description: {
            en: 'Sweet spice that helps regulate blood sugar.',
            es: 'Especia dulce que ayuda a regular el azúcar en sangre.',
            fr: 'Épice douce qui aide à réguler la glycémie.'
        },
        properties: [
            { property: { en: 'Antimicrobial', es: 'Antimicrobiano', fr: 'Antimicrobien' }, description: { en: 'Fights microbes', es: 'Combate microbios', fr: 'Combat les microbes' } },
            { property: { en: 'Blood Sugar', es: 'Azúcar en Sangre', fr: 'Glycémie' }, description: { en: 'Regulates glucose', es: 'Regula la glucosa', fr: 'Régule le glucose' } }
        ],
        dosage: { en: '1/2 tsp', es: '1/2 cdita', fr: '1/2 c. à café' },
        category: 'spice',
        safetyRating: 1,
        versatilityScore: 6,
        commonUses: ['Diabetes', 'Infections', 'Digestion'],
        tags: ['science', 'bible', 'history'],
        sources: [
            { type: 'bible', source: 'Exodus 30:23' },
            { type: 'science', source: 'Cinnamon and blood glucose', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4466762/' },
            { type: 'history', source: 'Highly prized in ancient trade routes' }
        ]
    },
    {
        _id: 'ing-peppermint',
        name: { en: 'Peppermint', es: 'Menta', fr: 'Menthe Poivrée' },
        scientificName: 'Mentha × piperita',
        description: {
            en: 'Refreshing herb for digestion and pain.',
            es: 'Hierba refrescante para la digestión y el dolor.',
            fr: 'Herbe rafraîchissante pour la digestion et la douleur.'
        },
        properties: [
            { property: { en: 'Digestive', es: 'Digestivo', fr: 'Digestif' }, description: { en: 'Relieves gas', es: 'Alivia gases', fr: 'Soulage les gaz' } },
            { property: { en: 'Analgesic', es: 'Analgésico', fr: 'Analgésique' }, description: { en: 'Relieves pain', es: 'Alivia el dolor', fr: 'Soulage la douleur' } }
        ],
        dosage: { en: '1 cup tea', es: '1 taza de té', fr: '1 tasse de thé' },
        category: 'herb',
        safetyRating: 1,
        versatilityScore: 6,
        commonUses: ['Indigestion', 'Headache', 'Congestion'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Peppermint oil for IBS', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5814329/' },
            { type: 'history', source: 'Found in Egyptian pyramids from 1000 BC' }
        ]
    },
    {
        _id: 'ing-cucumber',
        name: { en: 'Cucumber', es: 'Pepino', fr: 'Concombre' },
        scientificName: 'Cucumis sativus',
        description: {
            en: 'Cooling vegetable with high water content.',
            es: 'Vegetal refrescante con alto contenido de agua.',
            fr: 'Légume rafraîchissant à haute teneur en eau.'
        },
        properties: [
            { property: { en: 'Cooling', es: 'Refrescante', fr: 'Rafraîchissant' }, description: { en: 'Reduces puffiness', es: 'Reduce la hinchazón', fr: 'Réduit les poches' } },
            { property: { en: 'Hydrating', es: 'Hidratante', fr: 'Hydratant' }, description: { en: 'Moisturizes skin', es: 'Hidrata la piel', fr: 'Hydrate la peau' } }
        ],
        dosage: { en: '2 slices', es: '2 rodajas', fr: '2 tranches' },
        category: 'vegetable',
        safetyRating: 1,
        versatilityScore: 6,
        commonUses: ['Puffy Eyes', 'Sunburn', 'Hydration'],
        tags: ['science', 'history', 'bible'],
        sources: [
            { type: 'bible', source: 'Numbers 11:5' },
            { type: 'science', source: 'Phytochemical analysis', url: 'https://pubmed.ncbi.nlm.nih.gov/23098877/' },
            { type: 'history', source: 'Cultivated in India for over 3000 years' }
        ]
    },
    {
        _id: 'ing-olive-oil',
        name: { en: 'Olive Oil', es: 'Aceite de Oliva', fr: 'Huile d\'Olive' },
        scientificName: 'Olea europaea',
        description: {
            en: 'Healthy fat rich in antioxidants.',
            es: 'Grasa saludable rica en antioxidantes.',
            fr: 'Graisse saine riche en antioxydants.'
        },
        properties: [
            { property: { en: 'Moisturizing', es: 'Hidratante', fr: 'Hydratant' }, description: { en: 'Softens skin', es: 'Suaviza la piel', fr: 'Adoucit la peau' } },
            { property: { en: 'Antioxidant', es: 'Antioxidante', fr: 'Antioxydant' }, description: { en: 'Protects cells', es: 'Protege las células', fr: 'Protège les cellules' } }
        ],
        dosage: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' },
        category: 'food',
        safetyRating: 1,
        versatilityScore: 9,
        commonUses: ['Dry Skin', 'Earache', 'Cooking'],
        tags: ['quran', 'bible', 'science', 'history'],
        sources: [
            { type: 'quran', source: 'Surah An-Nur 24:35', url: 'https://quran.com/24/35' },
            { type: 'bible', source: 'Deuteronomy 8:8' },
            { type: 'science', source: 'Olive oil and skin health', url: 'https://pubmed.ncbi.nlm.nih.gov/19167997/' },
            { type: 'history', source: 'Symbol of peace and health since antiquity' }
        ]
    },
    {
        _id: 'ing-clove',
        name: { en: 'Clove', es: 'Clavo de Olor', fr: 'Clou de Girofle' },
        scientificName: 'Syzygium aromaticum',
        description: {
            en: 'Aromatic flower bud with numbing properties.',
            es: 'Capullo floral aromático con propiedades adormecedoras.',
            fr: 'Bouton floral aromatique aux propriétés anesthésiantes.'
        },
        properties: [
            { property: { en: 'Analgesic', es: 'Analgésico', fr: 'Analgésique' }, description: { en: 'Numbs pain', es: 'Adormece el dolor', fr: 'Engourdit la douleur' } },
            { property: { en: 'Antibacterial', es: 'Antibacteriano', fr: 'Antibactérien' }, description: { en: 'Fights bacteria', es: 'Combate bacterias', fr: 'Combat les bactéries' } }
        ],
        dosage: { en: '1 clove or oil', es: '1 clavo o aceite', fr: '1 clou ou huile' },
        category: 'spice',
        safetyRating: 2,
        versatilityScore: 5,
        commonUses: ['Toothache', 'Infections', 'Muscle Pain'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Eugenol analgesic properties', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3819475/' },
            { type: 'history', source: 'Used in Han Dynasty China to freshen breath' }
        ]
    },
    {
        _id: 'ing-thyme',
        name: { en: 'Thyme', es: 'Tomillo', fr: 'Thym' },
        scientificName: 'Thymus vulgaris',
        description: {
            en: 'Aromatic herb with respiratory benefits.',
            es: 'Hierba aromática con beneficios respiratorios.',
            fr: 'Herbe aromatique aux bienfaits respiratoires.'
        },
        properties: [
            { property: { en: 'Expectorant', es: 'Expectorante', fr: 'Expectorant' }, description: { en: 'Clears mucus', es: 'Limpia la mucosidad', fr: 'Dégage le mucus' } },
            { property: { en: 'Antiseptic', es: 'Antiséptico', fr: 'Antiseptique' }, description: { en: 'Disinfects', es: 'Desinfecta', fr: 'Désinfecte' } }
        ],
        dosage: { en: '1-2 tsp dried', es: '1-2 cditas seco', fr: '1-2 c. à café séché' },
        category: 'herb',
        safetyRating: 1,
        versatilityScore: 5,
        commonUses: ['Cough', 'Bronchitis', 'Digestion'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Thyme for acute bronchitis', url: 'https://pubmed.ncbi.nlm.nih.gov/17063641/' },
            { type: 'history', source: 'Used by Romans to purify rooms' }
        ]
    },
    {
        _id: 'ing-rosemary',
        name: { en: 'Rosemary', es: 'Romero', fr: 'Romarin' },
        scientificName: 'Salvia rosmarinus',
        description: {
            en: 'Woody herb that improves circulation and memory.',
            es: 'Hierba leñosa que mejora la circulación y la memoria.',
            fr: 'Herbe ligneuse qui améliore la circulation et la mémoire.'
        },
        properties: [
            { property: { en: 'Circulatory', es: 'Circulatorio', fr: 'Circulatoire' }, description: { en: 'Boosts blood flow', es: 'Aumenta el flujo sanguíneo', fr: 'Stimule la circulation sanguine' } },
            { property: { en: 'Cognitive', es: 'Cognitivo', fr: 'Cognitif' }, description: { en: 'Aids memory', es: 'Ayuda a la memoria', fr: 'Aide à la mémoire' } }
        ],
        dosage: { en: '1 cup tea', es: '1 taza de té', fr: '1 tasse de thé' },
        category: 'herb',
        safetyRating: 1,
        versatilityScore: 5,
        commonUses: ['Memory', 'Muscle Pain', 'Hair Growth'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Rosemary aroma and cognition', url: 'https://pubmed.ncbi.nlm.nih.gov/22612497/' },
            { type: 'history', source: 'Symbol of remembrance' }
        ]
    },
    {
        _id: 'ing-oregano',
        name: { en: 'Oregano', es: 'Orégano', fr: 'Origan' },
        scientificName: 'Origanum vulgare',
        description: {
            en: 'Potent herb with antibacterial properties.',
            es: 'Hierba potente con propiedades antibacterianas.',
            fr: 'Herbe puissante aux propriétés antibactériennes.'
        },
        properties: [
            { property: { en: 'Antibacterial', es: 'Antibacteriano', fr: 'Antibactérien' }, description: { en: 'Strong germ killer', es: 'Mata gérmenes fuerte', fr: 'Puissant tueur de germes' } },
            { property: { en: 'Antioxidant', es: 'Antioxidante', fr: 'Antioxydant' }, description: { en: 'High antioxidants', es: 'Altos antioxidantes', fr: 'Riche en antioxydants' } }
        ],
        dosage: { en: '1 tsp dried', es: '1 cdita seco', fr: '1 c. à café séché' },
        category: 'herb',
        safetyRating: 1,
        versatilityScore: 5,
        commonUses: ['Infections', 'Digestion', 'Immunity'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Antimicrobial activity of oregano', url: 'https://pubmed.ncbi.nlm.nih.gov/23484421/' },
            { type: 'history', source: 'Used by Greeks for trauma' }
        ]
    },
    {
        _id: 'ing-lavender',
        name: { en: 'Lavender', es: 'Lavanda', fr: 'Lavande' },
        scientificName: 'Lavandula',
        description: {
            en: 'Fragrant herb known for relaxation.',
            es: 'Hierba fragante conocida por la relajación.',
            fr: 'Herbe parfumée connue pour la relaxation.'
        },
        properties: [
            { property: { en: 'Calming', es: 'Calmante', fr: 'Calmant' }, description: { en: 'Reduces stress', es: 'Reduce el estrés', fr: 'Réduit le stress' } },
            { property: { en: 'Cicatrizing', es: 'Cicatrizante', fr: 'Cicatrisant' }, description: { en: 'Heals skin', es: 'Cura la piel', fr: 'Guérit la peau' } }
        ],
        dosage: { en: 'Tea or oil', es: 'Té o aceite', fr: 'Thé ou huile' },
        category: 'herb',
        safetyRating: 1,
        versatilityScore: 5,
        commonUses: ['Anxiety', 'Sleep', 'Burns'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Lavender for anxiety and sleep', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3612440/' },
            { type: 'history', source: 'Used in Roman baths' }
        ]
    },
    {
        _id: 'ing-eucalyptus',
        name: { en: 'Eucalyptus', es: 'Eucalipto', fr: 'Eucalyptus' },
        scientificName: 'Eucalyptus globulus',
        description: {
            en: 'Tree leaf used for respiratory relief.',
            es: 'Hoja de árbol usada para alivio respiratorio.',
            fr: 'Feuille d\'arbre utilisée pour le soulagement respiratoire.'
        },
        properties: [
            { property: { en: 'Decongestant', es: 'Descongestionante', fr: 'Décongestionnant' }, description: { en: 'Clears airways', es: 'Despeja vías respiratorias', fr: 'Dégage les voies respiratoires' } },
            { property: { en: 'Antiseptic', es: 'Antiséptico', fr: 'Antiseptique' }, description: { en: 'Kills germs', es: 'Mata gérmenes', fr: 'Tue les germes' } }
        ],
        dosage: { en: 'Steam inhalation', es: 'Inhalación de vapor', fr: 'Inhalation de vapeur' },
        category: 'herb',
        safetyRating: 2,
        versatilityScore: 4,
        commonUses: ['Congestion', 'Colds', 'Muscle Pain'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Eucalyptus oil for respiratory tract', url: 'https://pubmed.ncbi.nlm.nih.gov/20359267/' },
            { type: 'history', source: 'Traditional Aboriginal remedy' }
        ]
    },
    {
        _id: 'ing-onion',
        name: { en: 'Onion', es: 'Cebolla', fr: 'Oignon' },
        scientificName: 'Allium cepa',
        description: {
            en: 'Common vegetable with medicinal layers.',
            es: 'Vegetal común con capas medicinales.',
            fr: 'Légume commun aux couches médicinales.'
        },
        properties: [
            { property: { en: 'Expectorant', es: 'Expectorante', fr: 'Expectorant' }, description: { en: 'Loosens cough', es: 'Afloja la tos', fr: 'Desserre la toux' } },
            { property: { en: 'Anti-inflammatory', es: 'Antiinflamatorio', fr: 'Anti-inflammatoire' }, description: { en: 'Reduces swelling', es: 'Reduce la hinchazón', fr: 'Réduit l\'enflure' } }
        ],
        dosage: { en: 'Syrup or raw', es: 'Jarabe o cruda', fr: 'Sirop ou cru' },
        category: 'food',
        safetyRating: 1,
        versatilityScore: 4,
        commonUses: ['Cough', 'Colds', 'Infections'],
        tags: ['science', 'bible', 'quran', 'history'],
        sources: [
            { type: 'bible', source: 'Numbers 11:5' },
            { type: 'quran', source: 'Surah Al-Baqarah 2:61', url: 'https://quran.com/2/61' },
            { type: 'science', source: 'Anti-inflammatory effects of onion', url: 'https://pubmed.ncbi.nlm.nih.gov/19223126/' }
        ]
    },
    {
        _id: 'ing-carrot',
        name: { en: 'Carrot', es: 'Zanahoria', fr: 'Carotte' },
        scientificName: 'Daucus carota',
        description: {
            en: 'Root vegetable rich in Vitamin A.',
            es: 'Vegetal de raíz rico en Vitamina A.',
            fr: 'Légume racine riche en vitamine A.'
        },
        properties: [
            { property: { en: 'Nutritive', es: 'Nutritivo', fr: 'Nutritif' }, description: { en: 'Supports eye health', es: 'Apoya salud ocular', fr: 'Soutient la santé oculaire' } },
            { property: { en: 'Skin Health', es: 'Salud de la Piel', fr: 'Santé de la Peau' }, description: { en: 'Protects skin', es: 'Protege la piel', fr: 'Protège la peau' } }
        ],
        dosage: { en: 'Eat raw/cooked', es: 'Comer cruda/cocida', fr: 'Manger cru/cuit' },
        category: 'food',
        safetyRating: 1,
        versatilityScore: 4,
        commonUses: ['Vision', 'Skin Care', 'Immunity'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Carotenoids and eye health', url: 'https://pubmed.ncbi.nlm.nih.gov/12134711/' },
            { type: 'history', source: 'Cultivated in Afghanistan since 900 AD' }
        ]
    },
    {
        _id: 'ing-oat',
        name: { en: 'Oat', es: 'Avena', fr: 'Avoine' },
        scientificName: 'Avena sativa',
        description: {
            en: 'Grain that soothes skin and aids digestion.',
            es: 'Grano que calma la piel y ayuda a la digestión.',
            fr: 'Grain qui apaise la peau et aide à la digestion.'
        },
        properties: [
            { property: { en: 'Emollient', es: 'Emoliente', fr: 'Émollient' }, description: { en: 'Soothes itchy skin', es: 'Calma piel con picazón', fr: 'Apaise les démangeaisons' } },
            { property: { en: 'Fiber Rich', es: 'Rico en Fibra', fr: 'Riche en Fibres' }, description: { en: 'Aids digestion', es: 'Ayuda a la digestión', fr: 'Aide à la digestion' } }
        ],
        dosage: { en: 'Bath or porridge', es: 'Baño o gachas', fr: 'Bain ou bouillie' },
        category: 'food',
        safetyRating: 1,
        versatilityScore: 4,
        commonUses: ['Eczema', 'Digestion', 'Energy'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Colloidal oatmeal for skin', url: 'https://pubmed.ncbi.nlm.nih.gov/25607907/' },
            { type: 'history', source: 'Used in Roman times for skin' }
        ]
    },
    {
        _id: 'ing-papaya',
        name: { en: 'Papaya', es: 'Papaya', fr: 'Papaye' },
        scientificName: 'Carica papaya',
        description: {
            en: 'Tropical fruit with digestive enzymes.',
            es: 'Fruta tropical con enzimas digestivas.',
            fr: 'Fruit tropical aux enzymes digestives.'
        },
        properties: [
            { property: { en: 'Digestive', es: 'Digestivo', fr: 'Digestif' }, description: { en: 'Enzymes break down food', es: 'Enzimas descomponen comida', fr: 'Les enzymes décomposent la nourriture' } },
            { property: { en: 'Skin Healing', es: 'Curación de Piel', fr: 'Guérison de la Peau' }, description: { en: 'Helps wounds', es: 'Ayuda heridas', fr: 'Aide les plaies' } }
        ],
        dosage: { en: '1 cup fresh', es: '1 taza fresca', fr: '1 tasse fraîche' },
        category: 'fruit',
        safetyRating: 1,
        versatilityScore: 4,
        commonUses: ['Indigestion', 'Skin', 'Parasites'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Papain for digestion', url: 'https://pubmed.ncbi.nlm.nih.gov/23524622/' },
            { type: 'history', source: 'Native to Central America' }
        ]
    },
    {
        _id: 'ing-pineapple',
        name: { en: 'Pineapple', es: 'Piña', fr: 'Ananas' },
        scientificName: 'Ananas comosus',
        description: {
            en: 'Fruit containing bromelain enzyme.',
            es: 'Fruta que contiene la enzima bromelina.',
            fr: 'Fruit contenant l\'enzyme bromélaïne.'
        },
        properties: [
            { property: { en: 'Anti-inflammatory', es: 'Antiinflamatorio', fr: 'Anti-inflammatoire' }, description: { en: 'Reduces swelling', es: 'Reduce la hinchazón', fr: 'Réduit l\'enflure' } },
            { property: { en: 'Digestive', es: 'Digestivo', fr: 'Digestif' }, description: { en: 'Aids protein digestion', es: 'Ayuda digestión proteínas', fr: 'Aide digestion protéines' } }
        ],
        dosage: { en: '1 cup fresh', es: '1 taza fresca', fr: '1 tasse fraîche' },
        category: 'fruit',
        safetyRating: 1,
        versatilityScore: 4,
        commonUses: ['Inflammation', 'Digestion', 'Cough'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Bromelain anti-inflammatory', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3529416/' },
            { type: 'history', source: 'Discovered by Columbus in Guadeloupe' }
        ]
    },
    {
        _id: 'ing-fennel',
        name: { en: 'Fennel', es: 'Hinojo', fr: 'Fenouil' },
        scientificName: 'Foeniculum vulgare',
        description: {
            en: 'Sweet herb used for digestive issues.',
            es: 'Hierba dulce usada para problemas digestivos.',
            fr: 'Herbe douce utilisée pour les problèmes digestifs.'
        },
        properties: [
            { property: { en: 'Carminative', es: 'Carminativo', fr: 'Carminatif' }, description: { en: 'Expels gas', es: 'Expulsa gases', fr: 'Expulse les gaz' } },
            { property: { en: 'Antioxidant', es: 'Antioxidante', fr: 'Antioxydant' }, description: { en: 'Protects cells', es: 'Protege células', fr: 'Protège les cellules' } }
        ],
        dosage: { en: '1 tsp seeds tea', es: '1 cdita semillas té', fr: '1 c. à café graines thé' },
        category: 'herb',
        safetyRating: 1,
        versatilityScore: 3,
        commonUses: ['Gas', 'Bloating', 'Colic'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Fennel oil for colic', url: 'https://pubmed.ncbi.nlm.nih.gov/12868253/' },
            { type: 'history', source: 'Used by Roman soldiers for strength' }
        ]
    },
    {
        _id: 'ing-sage',
        name: { en: 'Sage', es: 'Salvia', fr: 'Sauge' },
        scientificName: 'Salvia officinalis',
        description: {
            en: 'Savory herb with antiseptic qualities.',
            es: 'Hierba sabrosa con cualidades antisépticas.',
            fr: 'Herbe savoureuse aux qualités antiseptiques.'
        },
        properties: [
            { property: { en: 'Antiseptic', es: 'Antiséptico', fr: 'Antiseptique' }, description: { en: 'Cleans mouth', es: 'Limpia la boca', fr: 'Nettoie la bouche' } },
            { property: { en: 'Antiperspirant', es: 'Antitranspirante', fr: 'Anti-transpirant' }, description: { en: 'Reduces sweating', es: 'Reduce sudoración', fr: 'Réduit la transpiration' } }
        ],
        dosage: { en: 'Tea or gargle', es: 'Té o gárgaras', fr: 'Thé ou gargarisme' },
        category: 'herb',
        safetyRating: 2,
        versatilityScore: 3,
        commonUses: ['Sore Throat', 'Sweating', 'Memory'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Sage for cognition', url: 'https://pubmed.ncbi.nlm.nih.gov/16018370/' },
            { type: 'history', source: 'Sacred herb in Rome' }
        ]
    },
    {
        _id: 'ing-ginseng',
        name: { en: 'Ginseng', es: 'Ginseng', fr: 'Ginseng' },
        scientificName: 'Panax ginseng',
        description: {
            en: 'Root used to boost energy and immunity.',
            es: 'Raíz usada para aumentar energía e inmunidad.',
            fr: 'Racine utilisée pour stimuler l\'énergie et l\'immunité.'
        },
        properties: [
            { property: { en: 'Adaptogen', es: 'Adaptógeno', fr: 'Adaptogène' }, description: { en: 'Helps stress', es: 'Ayuda con el estrés', fr: 'Aide au stress' } },
            { property: { en: 'Immune Boost', es: 'Impulso Inmune', fr: 'Boost Immunitaire' }, description: { en: 'Strengthens immunity', es: 'Fortalece inmunidad', fr: 'Renforce l\'immunité' } }
        ],
        dosage: { en: 'Tea or supplement', es: 'Té o suplemento', fr: 'Thé ou supplément' },
        category: 'herb',
        safetyRating: 2,
        versatilityScore: 3,
        commonUses: ['Fatigue', 'Stress', 'Immunity'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Ginseng immune modulation', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3659612/' },
            { type: 'history', source: 'Used in China for thousands of years' }
        ]
    },
    {
        _id: 'ing-valerian',
        name: { en: 'Valerian', es: 'Valeriana', fr: 'Valériane' },
        scientificName: 'Valeriana officinalis',
        description: {
            en: 'Root used as a natural sedative.',
            es: 'Raíz usada como sedante natural.',
            fr: 'Racine utilisée comme sédatif naturel.'
        },
        properties: [
            { property: { en: 'Sedative', es: 'Sedante', fr: 'Sédatif' }, description: { en: 'Induces sleep', es: 'Induce el sueño', fr: 'Induit le sommeil' } },
            { property: { en: 'Muscle Relaxant', es: 'Relajante Muscular', fr: 'Relaxant Musculaire' }, description: { en: 'Relaxes muscles', es: 'Relaja músculos', fr: 'Détend les muscles' } }
        ],
        dosage: { en: 'Tea before bed', es: 'Té antes de dormir', fr: 'Thé avant de dormir' },
        category: 'herb',
        safetyRating: 2,
        versatilityScore: 3,
        commonUses: ['Insomnia', 'Anxiety', 'Muscle Pain'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Valerian for sleep', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4394901/' },
            { type: 'history', source: 'Prescribed by Hippocrates' }
        ]
    },
    {
        _id: 'ing-epsom-salt',
        name: { en: 'Epsom Salt', es: 'Sales de Epsom', fr: 'Sel d\'Epsom' },
        scientificName: 'Magnesium sulfate',
        description: {
            en: 'Mineral compound used to relax muscles.',
            es: 'Compuesto mineral usado para relajar músculos.',
            fr: 'Composé minéral utilisé pour détendre les muscles.'
        },
        properties: [
            { property: { en: 'Muscle Relaxant', es: 'Relajante Muscular', fr: 'Relaxant Musculaire' }, description: { en: 'Eases cramps', es: 'Alivia calambres', fr: 'Soulage les crampes' } }
        ],
        dosage: { en: '1-2 cups in bath', es: '1-2 tazas en baño', fr: '1-2 tasses dans le bain' },
        category: 'mineral',
        safetyRating: 1,
        versatilityScore: 4,
        commonUses: ['Muscle Pain', 'Stress', 'Splinters'],
        tags: ['science', 'history'],
        sources: [
            { type: 'science', source: 'Magnesium absorption', url: 'https://pubmed.ncbi.nlm.nih.gov/26343101/' },
            { type: 'history', source: 'Discovered in Epsom, England' }
        ]
    },
    {
        _id: 'ing-banana',
        name: { en: 'Banana', es: 'Banana', fr: 'Banane' },
        scientificName: 'Musa',
        description: {
            en: 'Fruit rich in potassium and magnesium.',
            es: 'Fruta rica en potasio y magnesio.',
            fr: 'Fruit riche en potassium et magnésium.'
        },
        properties: [
            { property: { en: 'Electrolyte Replenishment', es: 'Reposición de Electrolitos', fr: 'Reconstitution des Électrolytes' }, description: { en: 'Prevents cramps', es: 'Previene calambres', fr: 'Prévient les crampes' } }
        ],
        dosage: { en: '1 fruit', es: '1 fruta', fr: '1 fruit' },
        category: 'fruit',
        safetyRating: 1,
        versatilityScore: 3,
        commonUses: ['Cramps', 'Digestion', 'Energy'],
        tags: ['science', 'quran', 'history'],
        sources: [
            { type: 'quran', source: 'Surah Al-Waqi\'ah 56:29', url: 'https://quran.com/56/29' },
            { type: 'science', source: 'Potassium benefits', url: 'https://pubmed.ncbi.nlm.nih.gov/23674806/' }
        ]
    },
    {
        _id: 'ing-figs',
        name: { en: 'Figs', es: 'Higos', fr: 'Figues' },
        scientificName: 'Ficus carica',
        description: {
            en: 'Nutrient-rich fruit with digestive benefits',
            es: 'Fruta rica en nutrientes con beneficios digestivos',
            fr: 'Fruit riche en nutriments avec des bienfaits digestifs'
        },
        properties: [
            {
                property: { en: 'Digestive Aid', es: 'Ayuda Digestiva', fr: 'Aide Digestive' },
                description: { en: 'High fiber content relieves constipation', es: 'Alto contenido en fibra alivia el estreñimiento', fr: 'Teneur élevée en fibres soulage la constipation' }
            }
        ],
        dosage: { en: '2-3 fresh figs daily', es: '2-3 higos frescos diarios', fr: '2-3 figues fraîches par jour' },
        category: 'fruit',
        safetyRating: 1,
        versatilityScore: 9,
        commonUses: ['Constipation', 'Anemia', 'Bone Health'],
        tags: ['quran', 'science', 'bible', 'history'],
        sources: [
            {
                type: 'quran',
                source: 'Surah At-Tin 95:1',
                url: 'https://quran.com/at-tin/1'
            },
            {
                type: 'science',
                source: 'Nutritional benefits of figs',
                url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3934558/'
            },
            {
                type: 'history',
                source: 'One of first cultivated fruits, 9400 BCE'
            }
        ]
    },
    {
        _id: 'ing-black-seed',
        name: { en: 'Black Seed', es: 'Semilla Negra', fr: 'Graine Noire' },
        scientificName: 'Nigella sativa',
        description: {
            en: 'Powerful seed with anti-inflammatory and immune-boosting properties',
            es: 'Semilla poderosa con propiedades antiinflamatorias y estimulantes del sistema inmunológico',
            fr: 'Graine puissante aux propriétés anti-inflammatoires et stimulantes du système immunitaire'
        },
        properties: [
            {
                property: { en: 'Anti-inflammatory', es: 'Antiinflamatorio', fr: 'Anti-inflammatoire' },
                description: { en: 'Reduces inflammation throughout body', es: 'Reduce la inflamación en todo el cuerpo', fr: 'Réduit l\'inflammation dans tout le corps' }
            }
        ],
        dosage: { en: '1 tsp daily, mixed with honey', es: '1 cdita diaria, mezclada con miel', fr: '1 c. à café par jour, mélangée avec du miel' },
        category: 'seed',
        safetyRating: 2,
        versatilityScore: 10,
        commonUses: ['Asthma', 'Allergies', 'Diabetes', 'Inflammation'],
        tags: ['hadith', 'science', 'history'],
        sources: [
            {
                type: 'hadith',
                source: 'Sahih al-Bukhari 5688',
                url: 'https://sunnah.com/bukhari:5688'
            },
            {
                type: 'science',
                source: 'Black seed and its active constituents',
                url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3642442/'
            },
            {
                type: 'history',
                source: 'Found in Tutankhamun\'s tomb, Ancient Egypt'
            }
        ]
    },
    {
        _id: 'ing-dates',
        name: { en: 'Dates', es: 'Dátiles', fr: 'Dattes' },
        scientificName: 'Phoenix dactylifera',
        description: {
            en: 'Sweet fruit rich in energy and fiber.',
            es: 'Fruta dulce rica en energía y fibra.',
            fr: 'Fruit sucré riche en énergie et en fibres.'
        },
        properties: [
            {
                property: { en: 'Energy Boost', es: 'Impulso de Energía', fr: 'Boost d\'Énergie' },
                description: { en: 'Natural sugars', es: 'Azúcares naturales', fr: 'Sucres naturels' }
            },
            {
                property: { en: 'Digestive', es: 'Digestivo', fr: 'Digestif' },
                description: { en: 'Rich in fiber', es: 'Rico en fibra', fr: 'Riche en fibres' }
            }
        ],
        dosage: { en: '3-7 dates daily', es: '3-7 dátiles diarios', fr: '3-7 dattes par jour' },
        category: 'fruit',
        safetyRating: 1,
        versatilityScore: 9,
        commonUses: ['Energy', 'Digestion', 'Labor'],
        tags: ['quran', 'hadith', 'science', 'history'],
        sources: [
            {
                type: 'quran',
                source: 'Surah Maryam 19:25',
                url: 'https://quran.com/19/25'
            },
            {
                type: 'hadith',
                source: 'Sahih Muslim 2047',
                url: 'https://sunnah.com/muslim:2047'
            },
            {
                type: 'science',
                source: 'Date fruit nutritional review',
                url: 'https://pubmed.ncbi.nlm.nih.gov/22188215/'
            }
        ]
    }
];

export const bodyPartsData = [
    {
        _id: '1',
        bodyPart: { en: 'Throat', es: 'Garganta', fr: 'Gorge' },
        image: throatImg,
        ailments: [
            {
                name: { en: 'Sore Throat', es: 'Dolor de Garganta', fr: 'Mal de Gorge' },
                remedies: [
                    {
                        name: { en: 'Honey & Lemon Tea', es: 'Té de Miel y Limón', fr: 'Thé au Miel et Citron' },
                        description: {
                            en: 'Honey soothes the throat while lemon provides Vitamin C and breaks up mucus.',
                            es: 'La miel suaviza la garganta mientras que el limón aporta Vitamina C y rompe la mucosidad.',
                            fr: 'Le miel apaise la gorge tandis que le citron apporte de la vitamine C et dégage le mucus.'
                        },
                        preparation: {
                            en: 'Mix ingredients in warm water. Drink slowly.',
                            es: 'Mezcla los ingredientes en agua tibia. Bebe despacio.',
                            fr: 'Mélangez les ingrédients dans de l\'eau tiède. Buvez lentement.'
                        },
                        warnings: {
                            en: 'Do not give honey to children under 1 year old.',
                            es: 'No dar miel a niños menores de 1 año.',
                            fr: 'Ne pas donner de miel aux enfants de moins d\'un an.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-honey', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' }, preparation: { en: 'raw', es: 'cruda', fr: 'crue' } },
                            { ingredientId: 'ing-lemon', quantity: { en: '1 tbsp juice', es: '1 cda jugo', fr: '1 c. à soupe jus' } }
                        ]
                    },
                    {
                        name: { en: 'Salt Water Gargle', es: 'Gárgaras de Agua Salada', fr: 'Gargarisme à l\'Eau Salée' },
                        description: {
                            en: 'Reduces swelling and kills bacteria in the throat.',
                            es: 'Reduce la inflamación y mata las bacterias en la garganta.',
                            fr: 'Réduit l\'enflure et tue les bactéries dans la gorge.'
                        },
                        preparation: {
                            en: 'Dissolve salt in warm water. Gargle for 30 seconds.',
                            es: 'Disuelve sal en agua tibia. Haz gárgaras por 30 segundos.',
                            fr: 'Dissoudre sel dans eau tiède. Gargarisez-vous pendant 30 secondes.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-salt', quantity: { en: '1/2 tsp', es: '1/2 cdita', fr: '1/2 c. à café' } }
                        ]
                    },
                    {
                        name: { en: 'Garlic & Honey', es: 'Ajo y Miel', fr: 'Ail et Miel' },
                        description: {
                            en: 'Potent natural antibiotic for throat infections.',
                            es: 'Potente antibiótico natural para infecciones de garganta.',
                            fr: 'Puissant antibiotique naturel pour les infections de la gorge.'
                        },
                        preparation: {
                            en: 'Crush garlic and mix with honey. Let sit for 15 mins.',
                            es: 'Machaca el ajo y mezcla con miel. Deja reposar 15 mins.',
                            fr: 'Écrasez l\'ail et mélangez avec le miel. Laissez reposer 15 min.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-garlic', quantity: { en: '1 clove', es: '1 diente', fr: '1 gousse' } },
                            { ingredientId: 'ing-honey', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    },
                    {
                        name: { en: 'Apple Cider Vinegar Gargle', es: 'Gárgaras de Vinagre de Manzana', fr: 'Gargarisme au Vinaigre de Cidre' },
                        description: {
                            en: 'Balances pH and kills bacteria.',
                            es: 'Equilibra el pH y mata bacterias.',
                            fr: 'Équilibre le pH et tue les bactéries.'
                        },
                        preparation: {
                            en: 'Mix vinegar with warm water. Gargle.',
                            es: 'Mezcla vinagre con agua tibia. Haz gárgaras.',
                            fr: 'Mélangez le vinaigre avec de l\'eau tiède. Gargarisez-vous.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-acv', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Tonsillitis', es: 'Amigdalitis', fr: 'Amygdalite' },
                remedies: [
                    {
                        name: { en: 'Sage Gargle', es: 'Gárgaras de Salvia', fr: 'Gargarisme à la Sauge' },
                        description: {
                            en: 'Antibacterial herb that soothes inflammation.',
                            es: 'Hierba antibacteriana que calma la inflamación.',
                            fr: 'Herbe antibactérienne qui apaise l\'inflammation.'
                        },
                        preparation: {
                            en: 'Steep sage in hot water. Cool and gargle.',
                            es: 'Deja reposar salvia en agua caliente. Enfría y haz gárgaras.',
                            fr: 'Laissez infuser la sauge dans l\'eau chaude. Refroidir et gargariser.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-sage', quantity: { en: '1 tbsp dried', es: '1 cda seca', fr: '1 c. à soupe séchée' } }
                        ]
                    },
                    {
                        name: { en: 'Salt & Baking Soda', es: 'Sal y Bicarbonato', fr: 'Sel et Bicarbonate' },
                        description: {
                            en: 'Cleanses and reduces swelling.',
                            es: 'Limpia y reduce la hinchazón.',
                            fr: 'Nettoie et réduit l\'enflure.'
                        },
                        preparation: {
                            en: 'Mix salt and baking soda in warm water. Gargle.',
                            es: 'Mezcla sal y bicarbonato en agua tibia. Haz gárgaras.',
                            fr: 'Mélangez le sel et le bicarbonate dans de l\'eau tiède. Gargarisez-vous.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-salt', quantity: { en: '1/2 tsp', es: '1/2 cdita', fr: '1/2 c. à café' } },
                            { ingredientId: 'ing-baking-soda', quantity: { en: '1/4 tsp', es: '1/4 cdita', fr: '1/4 c. à café' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Bad Breath', es: 'Mal Aliento', fr: 'Mauvaise Haleine' },
                remedies: [
                    {
                        name: { en: 'Clove Chew', es: 'Masticar Clavo', fr: 'Mâcher du Clou de Girofle' },
                        description: {
                            en: 'Kills bacteria causing odor.',
                            es: 'Mata bacterias que causan mal olor.',
                            fr: 'Tue les bactéries causant les mauvaises odeurs.'
                        },
                        preparation: {
                            en: 'Chew on a whole clove.',
                            es: 'Mastica un clavo entero.',
                            fr: 'Mâchez un clou de girofle entier.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-clove', quantity: { en: '1 piece', es: '1 pieza', fr: '1 pièce' } }
                        ]
                    },
                    {
                        name: { en: 'Fennel Seeds', es: 'Semillas de Hinojo', fr: 'Graines de Fenouil' },
                        description: {
                            en: 'Freshens breath naturally.',
                            es: 'Refresca el aliento naturalmente.',
                            fr: 'Rafraîchit l\'haleine naturellement.'
                        },
                        preparation: {
                            en: 'Chew a pinch of seeds.',
                            es: 'Mastica una pizca de semillas.',
                            fr: 'Mâchez une pincée de graines.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-fennel', quantity: { en: '1/2 tsp', es: '1/2 cdita', fr: '1/2 c. à café' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Laryngitis', es: 'Laringitis', fr: 'Laryngite' },
                remedies: [
                    {
                        name: { en: 'Ginger Tea', es: 'Té de Jengibre', fr: 'Thé au Gingembre' },
                        description: {
                            en: 'Soothes vocal cords.',
                            es: 'Suaviza las cuerdas vocales.',
                            fr: 'Apaise les cordes vocales.'
                        },
                        preparation: {
                            en: 'Drink warm ginger tea with honey.',
                            es: 'Bebe té de jengibre tibio con miel.',
                            fr: 'Buvez du thé au gingembre tiède avec du miel.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-ginger', quantity: { en: '1 tsp', es: '1 cdita', fr: '1 c. à café' } },
                            { ingredientId: 'ing-honey', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    }
                ]
            }
        ]
    },
    {
        _id: '2',
        bodyPart: { en: 'Head', es: 'Cabeza', fr: 'Tête' },
        image: headImg,
        ailments: [
            {
                name: { en: 'Headache', es: 'Dolor de Cabeza', fr: 'Maux de Tête' },
                remedies: [
                    {
                        name: { en: 'Peppermint Oil', es: 'Aceite de Menta', fr: 'Huile de Menthe Poivrée' },
                        description: {
                            en: 'Contains menthol which helps relax muscles and ease pain.',
                            es: 'Contiene mentol que ayuda a relajar los músculos y aliviar el dolor.',
                            fr: 'Contient du menthol qui aide à détendre les muscles et à soulager la douleur.'
                        },
                        preparation: {
                            en: 'Apply a few drops to your temples and massage gently.',
                            es: 'Aplica unas gotas en las sienes y masajea suavemente.',
                            fr: 'Appliquez quelques gouttes sur vos tempes et massez doucement.'
                        },
                        warnings: { en: 'Avoid contact with eyes.', es: 'Evitar contacto con los ojos.', fr: 'Éviter le contact avec les yeux.' },
                        ingredients: [
                            { ingredientId: 'ing-peppermint', quantity: { en: '2-3 drops', es: '2-3 gotas', fr: '2-3 gouttes' } }
                        ]
                    },
                    {
                        name: { en: 'Ginger Tea', es: 'Té de Jengibre', fr: 'Thé au Gingembre' },
                        description: {
                            en: 'Reduces inflammation and can help with nausea associated with headaches.',
                            es: 'Reduce la inflamación y puede ayudar con las náuseas asociadas al dolor de cabeza.',
                            fr: 'Réduit l\'inflammation et peut aider avec les nausées associées aux maux de tête.'
                        },
                        preparation: {
                            en: 'Steep fresh ginger slices in boiling water for 10 minutes.',
                            es: 'Deja reposar rodajas de jengibre fresco en agua hirviendo por 10 minutos.',
                            fr: 'Laissez infuser des tranches de gingembre frais dans de l\'eau bouillante pendant 10 minutes.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-ginger', quantity: { en: '2-3 slices', es: '2-3 rodajas', fr: '2-3 tranches' } }
                        ]
                    },
                    {
                        name: { en: 'Rosemary Infusion', es: 'Infusión de Romero', fr: 'Infusion de Romarin' },
                        description: {
                            en: 'Improves circulation to the brain.',
                            es: 'Mejora la circulación al cerebro.',
                            fr: 'Améliore la circulation vers le cerveau.'
                        },
                        preparation: {
                            en: 'Steep rosemary in hot water. Inhale steam or drink.',
                            es: 'Deja reposar romero en agua caliente. Inhala el vapor o bebe.',
                            fr: 'Laissez infuser le romarin dans l\'eau chaude. Inhaler la vapeur ou boire.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-rosemary', quantity: { en: '1 sprig', es: '1 ramita', fr: '1 brin' } }
                        ]
                    },
                    {
                        name: { en: 'Lavender Compress', es: 'Compresa de Lavanda', fr: 'Compresse de Lavande' },
                        description: {
                            en: 'Relaxes tension headaches.',
                            es: 'Relaja dolores de cabeza tensionales.',
                            fr: 'Détend les maux de tête de tension.'
                        },
                        preparation: {
                            en: 'Add lavender oil to cold water. Soak cloth and apply to forehead.',
                            es: 'Añade aceite de lavanda a agua fría. Remoja un paño y aplica en la frente.',
                            fr: 'Ajoutez de l\'huile de lavande à l\'eau froide. Trempez un chiffon et appliquez sur le front.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-lavender', quantity: { en: '5 drops', es: '5 gotas', fr: '5 gouttes' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Migraine', es: 'Migraña', fr: 'Migraine' },
                remedies: [
                    {
                        name: { en: 'Ginger & Lemon', es: 'Jengibre y Limón', fr: 'Gingembre et Citron' },
                        description: {
                            en: 'Relieves nausea and inflammation.',
                            es: 'Alivia náuseas e inflamación.',
                            fr: 'Soulage les nausées et l\'inflammation.'
                        },
                        preparation: {
                            en: 'Drink warm ginger tea with lemon juice.',
                            es: 'Bebe té de jengibre tibio con jugo de limón.',
                            fr: 'Buvez du thé au gingembre tiède avec du jus de citron.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-ginger', quantity: { en: '1 tsp', es: '1 cdita', fr: '1 c. à café' } },
                            { ingredientId: 'ing-lemon', quantity: { en: '1/2 lemon', es: '1/2 limón', fr: '1/2 citron' } }
                        ]
                    },
                    {
                        name: { en: 'Cold Cucumber Compress', es: 'Compresa Fría de Pepino', fr: 'Compresse Froide de Concombre' },
                        description: {
                            en: 'Numbs pain and reduces throbbing.',
                            es: 'Adormece el dolor y reduce las palpitaciones.',
                            fr: 'Engourdit la douleur et réduit les palpitations.'
                        },
                        preparation: {
                            en: 'Place cold cucumber slices on forehead and eyes.',
                            es: 'Coloca rodajas de pepino frías en la frente y ojos.',
                            fr: 'Placez des tranches de concombre froides sur le front et les yeux.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-cucumber', quantity: { en: '4 slices', es: '4 rodajas', fr: '4 tranches' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Dandruff', es: 'Caspa', fr: 'Pellicules' },
                remedies: [
                    {
                        name: { en: 'Aloe Vera Mask', es: 'Mascarilla de Aloe Vera', fr: 'Masque à l\'Aloe Vera' },
                        description: {
                            en: 'Hydrates scalp and reduces itching.',
                            es: 'Hidrata el cuero cabelludo y reduce la picazón.',
                            fr: 'Hydrate le cuir chevelu et réduit les démangeaisons.'
                        },
                        preparation: {
                            en: 'Massage aloe gel into scalp. Leave for 30 mins.',
                            es: 'Masajea gel de aloe en el cuero cabelludo. Deja 30 mins.',
                            fr: 'Massez le gel d\'aloe sur le cuir chevelu. Laissez 30 min.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-aloe', quantity: { en: '2 tbsp', es: '2 cdas', fr: '2 c. à soupe' } }
                        ]
                    },
                    {
                        name: { en: 'ACV Rinse', es: 'Enjuague de Vinagre', fr: 'Rinçage au Vinaigre' },
                        description: {
                            en: 'Balances scalp pH.',
                            es: 'Equilibra el pH del cuero cabelludo.',
                            fr: 'Équilibre le pH du cuir chevelu.'
                        },
                        preparation: {
                            en: 'Mix vinegar with water. Rinse hair after washing.',
                            es: 'Mezcla vinagre con agua. Enjuaga el cabello después de lavar.',
                            fr: 'Mélangez le vinaigre avec de l\'eau. Rincez les cheveux après lavage.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-acv', quantity: { en: '2 tbsp', es: '2 cdas', fr: '2 c. à soupe' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Insomnia', es: 'Insomnio', fr: 'Insomnie' },
                remedies: [
                    {
                        name: { en: 'Chamomile & Lavender', es: 'Manzanilla y Lavanda', fr: 'Camomille et Lavande' },
                        description: {
                            en: 'Ultimate relaxation blend.',
                            es: 'Mezcla de relajación definitiva.',
                            fr: 'Mélange de relaxation ultime.'
                        },
                        preparation: {
                            en: 'Brew tea with both herbs. Drink 30 mins before bed.',
                            es: 'Prepara té con ambas hierbas. Bebe 30 mins antes de dormir.',
                            fr: 'Infusez le thé avec les deux herbes. Buvez 30 min avant de dormir.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-chamomile', quantity: { en: '1 tsp', es: '1 cdita', fr: '1 c. à café' } },
                            { ingredientId: 'ing-lavender', quantity: { en: '1/2 tsp', es: '1/2 cdita', fr: '1/2 c. à café' } }
                        ]
                    },
                    {
                        name: { en: 'Valerian Root', es: 'Raíz de Valeriana', fr: 'Racine de Valériane' },
                        description: {
                            en: 'Strong natural sedative.',
                            es: 'Sedante natural fuerte.',
                            fr: 'Sédatif naturel puissant.'
                        },
                        preparation: {
                            en: 'Steep root in hot water. Drink warm.',
                            es: 'Deja reposar la raíz en agua caliente. Bebe tibio.',
                            fr: 'Laissez infuser la racine dans l\'eau chaude. Buvez chaud.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-valerian', quantity: { en: '1 tsp', es: '1 cdita', fr: '1 c. à café' } }
                        ]
                    }
                ]
            }
        ]
    },
    {
        _id: '3',
        bodyPart: { en: 'Stomach', es: 'Estómago', fr: 'Estomac' },
        image: stomachImg,
        ailments: [
            {
                name: { en: 'Indigestion', es: 'Indigestión', fr: 'Indigestion' },
                remedies: [
                    {
                        name: { en: 'Chamomile Tea', es: 'Té de Manzanilla', fr: 'Thé à la Camomille' },
                        description: {
                            en: 'Relaxes digestive muscles and reduces acid.',
                            es: 'Relaja los músculos digestivos y reduce el ácido.',
                            fr: 'Détend les muscles digestifs et réduit l\'acidité.'
                        },
                        preparation: {
                            en: 'Steep chamomile flowers in hot water for 5 minutes.',
                            es: 'Deja reposar flores de manzanilla en agua caliente por 5 minutos.',
                            fr: 'Laissez infuser des fleurs de camomille dans de l\'eau chaude pendant 5 minutes.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-chamomile', quantity: { en: '1 tbsp dried', es: '1 cda seca', fr: '1 c. à soupe séchée' } }
                        ]
                    },
                    {
                        name: { en: 'Baking Soda Water', es: 'Agua con Bicarbonato', fr: 'Eau au Bicarbonate' },
                        description: {
                            en: 'Neutralizes stomach acid quickly.',
                            es: 'Neutraliza el ácido estomacal rápidamente.',
                            fr: 'Neutralise l\'acide gastrique rapidement.'
                        },
                        preparation: {
                            en: 'Dissolve baking soda in a glass of water. Drink.',
                            es: 'Disuelve bicarbonato en un vaso de agua. Bebe.',
                            fr: 'Dissoudre le bicarbonate dans un verre d\'eau. Buvez.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-baking-soda', quantity: { en: '1/2 tsp', es: '1/2 cdita', fr: '1/2 c. à café' } }
                        ]
                    },
                    {
                        name: { en: 'Fennel Tea', es: 'Té de Hinojo', fr: 'Thé au Fenouil' },
                        description: {
                            en: 'Reduces gas and bloating.',
                            es: 'Reduce gases e hinchazón.',
                            fr: 'Réduit les gaz et les ballonnements.'
                        },
                        preparation: {
                            en: 'Crush seeds and steep in hot water.',
                            es: 'Machaca las semillas y deja reposar en agua caliente.',
                            fr: 'Écrasez les graines et laissez infuser dans l\'eau chaude.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-fennel', quantity: { en: '1 tsp seeds', es: '1 cdita semillas', fr: '1 c. à café graines' } }
                        ]
                    },
                    {
                        name: { en: 'Papaya Juice', es: 'Jugo de Papaya', fr: 'Jus de Papaye' },
                        description: {
                            en: 'Contains papain to digest proteins.',
                            es: 'Contiene papaína para digerir proteínas.',
                            fr: 'Contient de la papaïne pour digérer les protéines.'
                        },
                        preparation: {
                            en: 'Blend fresh papaya with water.',
                            es: 'Licúa papaya fresca con agua.',
                            fr: 'Mélangez de la papaye fraîche avec de l\'eau.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-papaya', quantity: { en: '1 cup', es: '1 taza', fr: '1 tasse' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Nausea', es: 'Náuseas', fr: 'Nausées' },
                remedies: [
                    {
                        name: { en: 'Ginger Chew', es: 'Masticar Jengibre', fr: 'Mâcher du Gingembre' },
                        description: {
                            en: 'Stops nausea quickly.',
                            es: 'Detiene las náuseas rápidamente.',
                            fr: 'Arrête les nausées rapidement.'
                        },
                        preparation: {
                            en: 'Chew on a small piece of fresh ginger.',
                            es: 'Mastica un pequeño trozo de jengibre fresco.',
                            fr: 'Mâchez un petit morceau de gingembre frais.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-ginger', quantity: { en: '1 slice', es: '1 rodaja', fr: '1 tranche' } }
                        ]
                    },
                    {
                        name: { en: 'Peppermint Tea', es: 'Té de Menta', fr: 'Thé à la Menthe' },
                        description: {
                            en: 'Settles the stomach.',
                            es: 'Asienta el estómago.',
                            fr: 'Apaise l\'estomac.'
                        },
                        preparation: {
                            en: 'Steep mint in hot water. Sip slowly.',
                            es: 'Deja reposar menta en agua caliente. Bebe despacio.',
                            fr: 'Laissez infuser la menthe dans l\'eau chaude. Sirotez lentement.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-peppermint', quantity: { en: '1 tbsp fresh', es: '1 cda fresca', fr: '1 c. à soupe fraîche' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Heartburn', es: 'Acidez', fr: 'Brûlures d\'Estomac' },
                remedies: [
                    {
                        name: { en: 'Banana', es: 'Banana', fr: 'Banane' },
                        description: {
                            en: 'Natural antacid that coats stomach lining.',
                            es: 'Antiácido natural que recubre el revestimiento estomacal.',
                            fr: 'Antiacide naturel qui tapisse la paroi de l\'estomac.'
                        },
                        preparation: {
                            en: 'Eat a ripe banana.',
                            es: 'Come una banana madura.',
                            fr: 'Mangez une banane mûre.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-banana', quantity: { en: '1 piece', es: '1 pieza', fr: '1 pièce' } }
                        ]
                    },
                    {
                        name: { en: 'Aloe Vera Juice', es: 'Jugo de Aloe Vera', fr: 'Jus d\'Aloe Vera' },
                        description: {
                            en: 'Reduces acid and inflammation.',
                            es: 'Reduce el ácido y la inflamación.',
                            fr: 'Réduit l\'acide et l\'inflammation.'
                        },
                        preparation: {
                            en: 'Drink a small amount of aloe juice.',
                            es: 'Bebe una pequeña cantidad de jugo de aloe.',
                            fr: 'Buvez une petite quantité de jus d\'aloe.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-aloe', quantity: { en: '2 tbsp', es: '2 cdas', fr: '2 c. à soupe' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Constipation', es: 'Estreñimiento', fr: 'Constipation' },
                remedies: [
                    {
                        name: { en: 'Oatmeal & Honey', es: 'Avena y Miel', fr: 'Avoine et Miel' },
                        description: {
                            en: 'High fiber content aids bowel movements.',
                            es: 'Alto contenido de fibra ayuda a los movimientos intestinales.',
                            fr: 'La teneur élevée en fibres aide le transit intestinal.'
                        },
                        preparation: {
                            en: 'Cook oats with water and sweeten with honey.',
                            es: 'Cocina avena con agua y endulza con miel.',
                            fr: 'Cuire l\'avoine avec de l\'eau et sucrer avec du miel.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-oat', quantity: { en: '1 cup', es: '1 taza', fr: '1 tasse' } },
                            { ingredientId: 'ing-honey', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    },
                    {
                        name: { en: 'Olive Oil Shot', es: 'Trago de Aceite de Oliva', fr: 'Shot d\'Huile d\'Olive' },
                        description: {
                            en: 'Lubricates the digestive system.',
                            es: 'Lubrica el sistema digestivo.',
                            fr: 'Lubrifie le système digestif.'
                        },
                        preparation: {
                            en: 'Take one tablespoon on an empty stomach.',
                            es: 'Toma una cucharada con el estómago vacío.',
                            fr: 'Prenez une cuillère à soupe à jeun.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-olive-oil', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    },
                    {
                        name: { en: 'Fig Paste for Constipation', es: 'Pasta de Higos para Estreñimiento', fr: 'Pâte de Figues pour la Constipation' },
                        description: {
                            en: 'Natural laxative that relieves constipation gently',
                            es: 'Laxante natural que alivia el estreñimiento suavemente',
                            fr: 'Laxatif naturel qui soulage la constipation en douceur'
                        },
                        preparation: {
                            en: 'Mash fresh figs into a paste. Eat on empty stomach.',
                            es: 'Aplasta higos frescos hasta hacer una pasta. Come con el estómago vacío.',
                            fr: 'Écraser les figues fraîches en une pâte. Mangez l\'estomac vide.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-figs', quantity: { en: '3-4 fresh figs', es: '3-4 higos frescos', fr: '3-4 figues fraîches' } }
                        ]
                    }
                ]
            }
        ]
    },
    {
        _id: '4',
        bodyPart: { en: 'Skin', es: 'Piel', fr: 'Peau' },
        image: skinImg,
        ailments: [
            {
                name: { en: 'Sunburn', es: 'Quemadura Solar', fr: 'Coup de Soleil' },
                remedies: [
                    {
                        name: { en: 'Aloe Vera', es: 'Aloe Vera', fr: 'Aloe Vera' },
                        description: {
                            en: 'Cools the skin and reduces inflammation.',
                            es: 'Enfría la piel y reduce la inflamación.',
                            fr: 'Rafraîchit la peau et réduit l\'inflammation.'
                        },
                        preparation: {
                            en: 'Apply fresh aloe gel directly to the burn.',
                            es: 'Aplica gel fresco de aloe directamente sobre la quemadura.',
                            fr: 'Appliquez du gel d\'aloe frais directement sur la brûlure.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-aloe', quantity: { en: 'As needed', es: 'Según necesario', fr: 'Au besoin' } }
                        ]
                    },
                    {
                        name: { en: 'Oatmeal Mask', es: 'Mascarilla de Avena', fr: 'Masque à l\'Avoine' },
                        description: {
                            en: 'Soothes irritated skin.',
                            es: 'Calma la piel irritada.',
                            fr: 'Apaise la peau irritée.'
                        },
                        preparation: {
                            en: 'Mix ground oats with honey and water. Apply.',
                            es: 'Mezcla avena molida con miel y agua. Aplica.',
                            fr: 'Mélangez l\'avoine moulue avec du miel et de l\'eau. Appliquez.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-oat', quantity: { en: '2 tbsp', es: '2 cdas', fr: '2 c. à soupe' } },
                            { ingredientId: 'ing-honey', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    },
                    {
                        name: { en: 'Coconut Oil Moisturizer', es: 'Hidratante de Aceite de Coco', fr: 'Hydratant à l\'Huile de Coco' },
                        description: {
                            en: 'Deeply hydrates dry skin.',
                            es: 'Hidrata profundamente la piel seca.',
                            fr: 'Hydrate en profondeur la peau sèche.'
                        },
                        preparation: {
                            en: 'Apply thin layer to skin.',
                            es: 'Aplica una capa fina sobre la piel.',
                            fr: 'Appliquez une fine couche sur la peau.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-coconut-oil', quantity: { en: 'As needed', es: 'Según necesario', fr: 'Au besoin' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Acne', es: 'Acné', fr: 'Acné' },
                remedies: [
                    {
                        name: { en: 'Honey & Cinnamon', es: 'Miel y Canela', fr: 'Miel et Cannelle' },
                        description: {
                            en: 'Antibacterial mask for acne.',
                            es: 'Mascarilla antibacteriana para el acné.',
                            fr: 'Masque antibactérien pour l\'acné.'
                        },
                        preparation: {
                            en: 'Mix honey and cinnamon. Apply to spots.',
                            es: 'Mezcla miel y canela. Aplica en los puntos.',
                            fr: 'Mélangez le miel et la cannelle. Appliquez sur les boutons.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-honey', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } },
                            { ingredientId: 'ing-cinnamon', quantity: { en: '1/2 tsp', es: '1/2 cdita', fr: '1/2 c. à café' } }
                        ]
                    },
                    {
                        name: { en: 'Garlic Spot Treatment', es: 'Ajo para Granos', fr: 'Ail pour Boutons' },
                        description: {
                            en: 'Kills acne-causing bacteria.',
                            es: 'Mata bacterias causantes del acné.',
                            fr: 'Tue les bactéries responsables de l\'acné.'
                        },
                        preparation: {
                            en: 'Rub a slice of garlic on pimple.',
                            es: 'Frota una rodaja de ajo sobre el grano.',
                            fr: 'Frottez une tranche d\'ail sur le bouton.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-garlic', quantity: { en: '1 slice', es: '1 rodaja', fr: '1 tranche' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Eczema', es: 'Eczema', fr: 'Eczéma' },
                remedies: [
                    {
                        name: { en: 'Oatmeal Bath', es: 'Baño de Avena', fr: 'Bain à l\'Avoine' },
                        description: {
                            en: 'Soothes itchy, inflamed skin.',
                            es: 'Calma la piel inflamada y con picazón.',
                            fr: 'Apaise la peau irritée et enflammée.'
                        },
                        preparation: {
                            en: 'Add ground oats to warm bath.',
                            es: 'Añade avena molida al baño tibio.',
                            fr: 'Ajoutez de l\'avoine moulue au bain tiède.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-oat', quantity: { en: '1 cup', es: '1 taza', fr: '1 tasse' } }
                        ]
                    },
                    {
                        name: { en: 'Olive Oil', es: 'Aceite de Oliva', fr: 'Huile d\'Olive' },
                        description: {
                            en: 'Rich moisturizer for dry patches.',
                            es: 'Hidratante rico para parches secos.',
                            fr: 'Hydratant riche pour les plaques sèches.'
                        },
                        preparation: {
                            en: 'Apply to affected areas.',
                            es: 'Aplica en áreas afectadas.',
                            fr: 'Appliquez sur les zones touchées.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-olive-oil', quantity: { en: 'As needed', es: 'Según necesario', fr: 'Au besoin' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Insect Bites', es: 'Picaduras de Insectos', fr: 'Piqûres d\'Insectes' },
                remedies: [
                    {
                        name: { en: 'Baking Soda Paste', es: 'Pasta de Bicarbonato', fr: 'Pâte de Bicarbonate' },
                        description: {
                            en: 'Relieves itching and swelling.',
                            es: 'Alivia la picazón y la hinchazón.',
                            fr: 'Soulage les démangeaisons et l\'enflure.'
                        },
                        preparation: {
                            en: 'Mix with water to paste. Apply.',
                            es: 'Mezcla con agua hasta hacer pasta. Aplica.',
                            fr: 'Mélangez avec de l\'eau pour faire une pâte. Appliquez.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-baking-soda', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    },
                    {
                        name: { en: 'Lavender Oil', es: 'Aceite de Lavanda', fr: 'Huile de Lavande' },
                        description: {
                            en: 'Reduces irritation.',
                            es: 'Reduce la irritación.',
                            fr: 'Réduit l\'irritation.'
                        },
                        preparation: {
                            en: 'Apply a drop to the bite.',
                            es: 'Aplica una gota sobre la picadura.',
                            fr: 'Appliquez une goutte sur la piqûre.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-lavender', quantity: { en: '1 drop', es: '1 gota', fr: '1 goutte' } }
                        ]
                    }
                ]
            }
        ]
    },
    {
        _id: '5',
        bodyPart: { en: 'Chest', es: 'Pecho', fr: 'Poitrine' },
        image: chestImg,
        ailments: [
            {
                name: { en: 'Cough', es: 'Tos', fr: 'Toux' },
                remedies: [
                    {
                        name: { en: 'Thyme Tea', es: 'Té de Tomillo', fr: 'Thé au Thym' },
                        description: {
                            en: 'Relaxes the muscles of the trachea and bronchi.',
                            es: 'Relaja los músculos de la tráquea y los bronquios.',
                            fr: 'Détend les muscles de la trachée et des bronches.'
                        },
                        preparation: {
                            en: 'Steep 2 tsp crushed thyme in boiling water for 10 mins.',
                            es: 'Deja reposar 2 cditas de tomillo machacado en agua hirviendo por 10 mins.',
                            fr: 'Laissez infuser 2 c. à café de thym écrasé dans de l\'eau bouillante pendant 10 min.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-thyme', quantity: { en: '2 tsp', es: '2 cditas', fr: '2 c. à café' } }
                        ]
                    },
                    {
                        name: { en: 'Onion Syrup', es: 'Jarabe de Cebolla', fr: 'Sirop d\'Oignon' },
                        description: {
                            en: 'Natural expectorant.',
                            es: 'Expectorante natural.',
                            fr: 'Expectorant naturel.'
                        },
                        preparation: {
                            en: 'Layer onion slices with honey. Let sit overnight. Drink syrup.',
                            es: 'Alterna capas de cebolla con miel. Deja reposar toda la noche. Bebe el jarabe.',
                            fr: 'Superposez des tranches d\'oignon avec du miel. Laissez reposer toute la nuit. Buvez le sirop.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-onion', quantity: { en: '1/2 onion', es: '1/2 cebolla', fr: '1/2 oignon' } },
                            { ingredientId: 'ing-honey', quantity: { en: '2 tbsp', es: '2 cdas', fr: '2 c. à soupe' } }
                        ]
                    },
                    {
                        name: { en: 'Eucalyptus Steam', es: 'Vapor de Eucalipto', fr: 'Vapeur d\'Eucalyptus' },
                        description: {
                            en: 'Clears congestion.',
                            es: 'Despeja la congestión.',
                            fr: 'Dégage la congestion.'
                        },
                        preparation: {
                            en: 'Add eucalyptus leaves to boiling water. Inhale steam.',
                            es: 'Añade hojas de eucalipto a agua hirviendo. Inhala el vapor.',
                            fr: 'Ajoutez des feuilles d\'eucalyptus à l\'eau bouillante. Inhaler la vapeur.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-eucalyptus', quantity: { en: 'Handful', es: 'Puñado', fr: 'Poignée' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Bronchitis', es: 'Bronquitis', fr: 'Bronchite' },
                remedies: [
                    {
                        name: { en: 'Thyme & Honey', es: 'Tomillo y Miel', fr: 'Thym et Miel' },
                        description: {
                            en: 'Soothing expectorant tea.',
                            es: 'Té expectorante calmante.',
                            fr: 'Thé expectorant apaisant.'
                        },
                        preparation: {
                            en: 'Brew thyme tea and add honey. Drink warm.',
                            es: 'Prepara té de tomillo y añade miel. Bebe tibio.',
                            fr: 'Infusez du thé au thym et ajoutez du miel. Buvez chaud.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-thyme', quantity: { en: '1 tsp', es: '1 cdita', fr: '1 c. à café' } },
                            { ingredientId: 'ing-honey', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    },
                    {
                        name: { en: 'Eucalyptus Steam', es: 'Vapor de Eucalipto', fr: 'Vapeur d\'Eucalyptus' },
                        description: {
                            en: 'Deeply clears bronchial tubes.',
                            es: 'Despeja profundamente los bronquios.',
                            fr: 'Dégage profondément les bronches.'
                        },
                        preparation: {
                            en: 'Inhale steam from eucalyptus boiled water.',
                            es: 'Inhala vapor de agua hervida con eucalipto.',
                            fr: 'Inhaler la vapeur d\'eau bouillie avec de l\'eucalyptus.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-eucalyptus', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Chest Congestion', es: 'Congestión de Pecho', fr: 'Congestion Thoracique' },
                remedies: [
                    {
                        name: { en: 'Ginger Compress', es: 'Compresa de Jengibre', fr: 'Compresse de Gingembre' },
                        description: {
                            en: 'Warming effect loosens mucus.',
                            es: 'Efecto calorífico afloja la mucosidad.',
                            fr: 'Effet réchauffant détache le mucus.'
                        },
                        preparation: {
                            en: 'Soak cloth in strong ginger tea. Apply to chest.',
                            es: 'Remoja un paño en té fuerte de jengibre. Aplica en el pecho.',
                            fr: 'Trempez un chiffon dans du thé au gingembre fort. Appliquez sur la poitrine.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-ginger', quantity: { en: '2 tbsp fresh', es: '2 cdas fresco', fr: '2 c. à soupe frais' } }
                        ]
                    },
                    {
                        name: { en: 'Peppermint Steam', es: 'Vapor de Menta', fr: 'Vapeur de Menthe' },
                        description: {
                            en: 'Menthol clears airways.',
                            es: 'El mentol despeja las vías respiratorias.',
                            fr: 'Le menthol dégage les voies respiratoires.'
                        },
                        preparation: {
                            en: 'Inhale steam from peppermint tea.',
                            es: 'Inhala vapor de té de menta.',
                            fr: 'Inhaler la vapeur de thé à la menthe.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-peppermint', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    },
                    {
                        name: { en: 'Black Seed Oil for Breathing', es: 'Aceite de Semilla Negra para Respirar', fr: 'Huile de Graine Noire pour la Respiration' },
                        description: {
                            en: 'Reduces inflammation in airways and improves breathing',
                            es: 'Reduce la inflamación en las vías respiratorias y mejora la respiración',
                            fr: 'Réduit l\'inflammation des voies respiratoires et améliore la respiration'
                        },
                        preparation: {
                            en: 'Mix oil with honey and warm water. Drink daily.',
                            es: 'Mezcla aceite con miel y agua tibia. Bebe diariamente.',
                            fr: 'Mélanger l\'huile avec du miel et de l\'eau tiède. Buvez quotidiennement.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-black-seed', quantity: { en: '1 tsp oil', es: '1 cdita de aceite', fr: '1 c. à café d\'huile' } },
                            { ingredientId: 'ing-honey', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    }
                ]
            }
        ]
    },
    {
        _id: '6',
        bodyPart: { en: 'Eyes', es: 'Ojos', fr: 'Yeux' },
        image: eyesImg,
        ailments: [
            {
                name: { en: 'Dry Eyes', es: 'Ojos Secos', fr: 'Yeux Secs' },
                remedies: [
                    {
                        name: { en: 'Cucumber Slices', es: 'Rodajas de Pepino', fr: 'Tranches de Concombre' },
                        description: {
                            en: 'Moisturizes and cools the eyes.',
                            es: 'Hidrata y refresca los ojos.',
                            fr: 'Hydrate et rafraîchit les yeux.'
                        },
                        preparation: {
                            en: 'Place chilled cucumber slices on closed eyes for 10 mins.',
                            es: 'Coloca rodajas de pepino frías sobre los ojos cerrados por 10 mins.',
                            fr: 'Placez des tranches de concombre réfrigérées sur les yeux fermés pendant 10 min.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-cucumber', quantity: { en: '2 slices', es: '2 rodajas', fr: '2 tranches' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Puffy Eyes', es: 'Ojos Hinchados', fr: 'Yeux Bouffis' },
                remedies: [
                    {
                        name: { en: 'Chamomile Compress', es: 'Compresa de Manzanilla', fr: 'Compresse de Camomille' },
                        description: {
                            en: 'Anti-inflammatory and cooling.',
                            es: 'Antiinflamatorio y refrescante.',
                            fr: 'Anti-inflammatoire et rafraîchissant.'
                        },
                        preparation: {
                            en: 'Chill used chamomile tea bags. Place on eyes.',
                            es: 'Enfría bolsitas de té de manzanilla usadas. Coloca sobre los ojos.',
                            fr: 'Refroidir les sachets de thé à la camomille utilisés. Placez sur les yeux.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-chamomile', quantity: { en: '2 bags', es: '2 bolsitas', fr: '2 sachets' } }
                        ]
                    },
                    {
                        name: { en: 'Salt Water Compress', es: 'Compresa de Agua Salada', fr: 'Compresse d\'Eau Salée' },
                        description: {
                            en: 'Draws out excess fluid.',
                            es: 'Extrae el exceso de líquido.',
                            fr: 'Aspire l\'excès de liquide.'
                        },
                        preparation: {
                            en: 'Dissolve salt in ice water. Soak pads and apply.',
                            es: 'Disuelve sal en agua helada. Remoja almohadillas y aplica.',
                            fr: 'Dissoudre le sel dans l\'eau glacée. Trempez les tampons et appliquez.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-salt', quantity: { en: '1 tsp', es: '1 cdita', fr: '1 c. à café' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Eye Strain', es: 'Fatiga Visual', fr: 'Fatigue Oculaire' },
                remedies: [
                    {
                        name: { en: 'Fennel Wash', es: 'Lavado de Hinojo', fr: 'Lavage au Fenouil' },
                        description: {
                            en: 'Traditional eyewash for strain.',
                            es: 'Lavado ocular tradicional para la fatiga.',
                            fr: 'Lavage oculaire traditionnel pour la fatigue.'
                        },
                        preparation: {
                            en: 'Steep fennel seeds, strain thoroughly, cool. Rinse.',
                            es: 'Infusiona semillas de hinojo, cuela bien, enfría. Enjuaga.',
                            fr: 'Infusez les graines de fenouil, filtrez bien, refroidissez. Rincez.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-fennel', quantity: { en: '1 tsp', es: '1 cdita', fr: '1 c. à café' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Dark Circles', es: 'Ojeras', fr: 'Cernes' },
                remedies: [
                    {
                        name: { en: 'Coconut Oil Massage', es: 'Masaje de Aceite de Coco', fr: 'Massage à l\'Huile de Coco' },
                        description: {
                            en: 'Hydrates delicate skin.',
                            es: 'Hidrata la piel delicada.',
                            fr: 'Hydrate la peau délicate.'
                        },
                        preparation: {
                            en: 'Gently massage oil under eyes.',
                            es: 'Masajea suavemente aceite debajo de los ojos.',
                            fr: 'Massez doucement l\'huile sous les yeux.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-coconut-oil', quantity: { en: '1 drop', es: '1 gota', fr: '1 goutte' } }
                        ]
                    },
                    {
                        name: { en: 'Cucumber Juice', es: 'Jugo de Pepino', fr: 'Jus de Concombre' },
                        description: {
                            en: 'Lightens and refreshes skin.',
                            es: 'Aclara y refresca la piel.',
                            fr: 'Éclaircit et rafraîchit la peau.'
                        },
                        preparation: {
                            en: 'Apply cucumber juice with cotton pad.',
                            es: 'Aplica jugo de pepino con algodón.',
                            fr: 'Appliquez le jus de concombre avec un coton.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-cucumber', quantity: { en: '2 slices', es: '2 rodajas', fr: '2 tranches' } }
                        ]
                    }
                ]
            }
        ]
    },
    {
        _id: '7',
        bodyPart: { en: 'Back', es: 'Espalda', fr: 'Dos' },
        image: backImg,
        ailments: [
            {
                name: { en: 'Lower Back Pain', es: 'Dolor Lumbar', fr: 'Douleur Lombaire' },
                remedies: [
                    {
                        name: { en: 'Epsom Salt Bath', es: 'Baño de Sales de Epsom', fr: 'Bain au Sel d\'Epsom' },
                        description: {
                            en: 'Magnesium absorbs through skin to relax muscles.',
                            es: 'El magnesio se absorbe por la piel para relajar los músculos.',
                            fr: 'Le magnésium est absorbé par la peau pour détendre les muscles.'
                        },
                        preparation: {
                            en: 'Add 2 cups Epsom salt to warm bath. Soak for 20 mins.',
                            es: 'Añade 2 tazas de sales de Epsom al baño tibio. Remoja por 20 mins.',
                            fr: 'Ajoutez 2 tasses de sel d\'Epsom au bain chaud. Trempez pendant 20 min.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-epsom-salt', quantity: { en: '2 cups', es: '2 tazas', fr: '2 tasses' } }
                        ]
                    },
                    {
                        name: { en: 'Turmeric Paste', es: 'Pasta de Cúrcuma', fr: 'Pâte de Curcuma' },
                        description: {
                            en: 'Reduces inflammation locally.',
                            es: 'Reduce la inflamación localmente.',
                            fr: 'Réduit l\'inflammation localement.'
                        },
                        preparation: {
                            en: 'Mix turmeric with water to make a paste. Apply to back.',
                            es: 'Mezcla cúrcuma con agua para hacer una pasta. Aplica en la espalda.',
                            fr: 'Mélangez le curcuma avec de l\'eau pour faire une pâte. Appliquez sur le dos.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-turmeric', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    },
                    {
                        name: { en: 'Clove Oil Massage', es: 'Masaje con Aceite de Clavo', fr: 'Massage à l\'Huile de Clou de Girofle' },
                        description: {
                            en: 'Numbing effect for pain.',
                            es: 'Efecto adormecedor para el dolor.',
                            fr: 'Effet anesthésiant pour la douleur.'
                        },
                        preparation: {
                            en: 'Dilute clove oil with carrier oil. Massage.',
                            es: 'Diluye aceite de clavo con aceite portador. Masajea.',
                            fr: 'Diluez l\'huile de clou de girofle avec une huile de support. Massez.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-clove', quantity: { en: '2 drops', es: '2 gotas', fr: '2 gouttes' } },
                            { ingredientId: 'ing-olive-oil', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    },
                    {
                        name: { en: 'Lavender Bath', es: 'Baño de Lavanda', fr: 'Bain de Lavande' },
                        description: {
                            en: 'Relaxes muscles and mind.',
                            es: 'Relaja músculos y mente.',
                            fr: 'Détend les muscles et l\'esprit.'
                        },
                        preparation: {
                            en: 'Add lavender oil and epsom salt to bath.',
                            es: 'Añade aceite de lavanda y sales de epsom al baño.',
                            fr: 'Ajoutez de l\'huile de lavande et du sel d\'epsom au bain.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-lavender', quantity: { en: '10 drops', es: '10 gotas', fr: '10 gouttes' } },
                            { ingredientId: 'ing-epsom-salt', quantity: { en: '1 cup', es: '1 taza', fr: '1 tasse' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Muscle Tension', es: 'Tensión Muscular', fr: 'Tension Musculaire' },
                remedies: [
                    {
                        name: { en: 'Valerian Infusion', es: 'Infusión de Valeriana', fr: 'Infusion de Valériane' },
                        description: {
                            en: 'Relaxes tight muscles from within.',
                            es: 'Relaja músculos tensos desde adentro.',
                            fr: 'Détend les muscles tendus de l\'intérieur.'
                        },
                        preparation: {
                            en: 'Drink valerian tea before relaxing.',
                            es: 'Bebe té de valeriana antes de relajarte.',
                            fr: 'Buvez du thé à la valériane avant de vous détendre.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-valerian', quantity: { en: '1 cup', es: '1 taza', fr: '1 tasse' } }
                        ]
                    },
                    {
                        name: { en: 'Warm Epsom Soak', es: 'Remojo en Sales de Epsom', fr: 'Trampage au Sel d\'Epsom' },
                        description: {
                            en: 'Relieves soreness.',
                            es: 'Alivia el dolor.',
                            fr: 'Soulage la douleur.'
                        },
                        preparation: {
                            en: 'Soak towel in warm epsom water. Apply to back.',
                            es: 'Remoja toalla en agua tibia con epsom. Aplica en la espalda.',
                            fr: 'Trempez une serviette dans l\'eau epsom tiède. Appliquez sur le dos.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-epsom-salt', quantity: { en: '1/2 cup', es: '1/2 taza', fr: '1/2 tasse' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Sciatica', es: 'Ciática', fr: 'Sciatique' },
                remedies: [
                    {
                        name: { en: 'Turmeric Milk', es: 'Leche de Cúrcuma', fr: 'Lait au Curcuma' },
                        description: {
                            en: 'Reduces nerve inflammation.',
                            es: 'Reduce la inflamación nerviosa.',
                            fr: 'Réduit l\'inflammation nerveuse.'
                        },
                        preparation: {
                            en: 'Mix turmeric powder in warm milk (or water). Drink.',
                            es: 'Mezcla cúrcuma en leche tibia (o agua). Bebe.',
                            fr: 'Mélangez la poudre de curcuma dans du lait tiède (ou de l\'eau). Buvez.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-turmeric', quantity: { en: '1 tsp', es: '1 cdita', fr: '1 c. à café' } }
                        ]
                    },
                    {
                        name: { en: 'Eucalyptus Oil Rub', es: 'Frotación de Eucalipto', fr: 'Frottement à l\'Eucalyptus' },
                        description: {
                            en: 'Cools and relieves nerve pain.',
                            es: 'Enfría y alivia el dolor nervioso.',
                            fr: 'Refroidit et soulage la douleur nerveuse.'
                        },
                        preparation: {
                            en: 'Gently rub oil on affected area.',
                            es: 'Frota suavemente aceite en el área afectada.',
                            fr: 'Frottez doucement l\'huile sur la zone affectée.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-eucalyptus', quantity: { en: '2 drops', es: '2 gotas', fr: '2 gouttes' } },
                            { ingredientId: 'ing-olive-oil', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    }
                ]
            }
        ]
    },
    {
        _id: '8',
        bodyPart: { en: 'Legs', es: 'Piernas', fr: 'Jambes' },
        image: legsImg,
        ailments: [
            {
                name: { en: 'Muscle Cramps', es: 'Calambres Musculares', fr: 'Crampes Musculaires' },
                remedies: [
                    {
                        name: { en: 'Eat a Banana', es: 'Comer una Banana', fr: 'Manger une Banane' },
                        description: {
                            en: 'Provides potassium to stop cramps.',
                            es: 'Provee potasio para detener calambres.',
                            fr: 'Fournit du potassium pour arrêter les crampes.'
                        },
                        preparation: {
                            en: 'Eat one ripe banana daily.',
                            es: 'Come una banana madura diariamente.',
                            fr: 'Mangez une banane mûre chaque jour.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-banana', quantity: { en: '1 piece', es: '1 pieza', fr: '1 pièce' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Varicose Veins', es: 'Venas Varicosas', fr: 'Varices' },
                remedies: [
                    {
                        name: { en: 'ACV Compress', es: 'Compresa de Vinagre', fr: 'Compresse de Vinaigre' },
                        description: {
                            en: 'Improves circulation.',
                            es: 'Mejora la circulación.',
                            fr: 'Améliore la circulation.'
                        },
                        preparation: {
                            en: 'Apply cloth soaked in ACV to veins.',
                            es: 'Aplica paño empapado en vinagre sobre las venas.',
                            fr: 'Appliquez un chiffon imbibé de vinaigre sur les veines.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-acv', quantity: { en: '1/2 cup', es: '1/2 taza', fr: '1/2 tasse' } }
                        ]
                    },
                    {
                        name: { en: 'Garlic Oil Massage', es: 'Masaje de Aceite de Ajo', fr: 'Massage à l\'Huile d\'Ail' },
                        description: {
                            en: 'Stimulates blood flow.',
                            es: 'Estimula el flujo sanguíneo.',
                            fr: 'Stimule la circulation sanguine.'
                        },
                        preparation: {
                            en: 'Mix crushed garlic with oil. Massage lightly.',
                            es: 'Mezcla ajo machacado con aceite. Masajea ligeramente.',
                            fr: 'Mélangez l\'ail écrasé avec de l\'huile. Massez légèrement.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-garlic', quantity: { en: '2 cloves', es: '2 dientes', fr: '2 gousses' } },
                            { ingredientId: 'ing-olive-oil', quantity: { en: '2 tbsp', es: '2 cdas', fr: '2 c. à soupe' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Swelling (Edema)', es: 'Hinchazón (Edema)', fr: 'Gonflement (Œdème)' },
                remedies: [
                    {
                        name: { en: 'Cucumber Water', es: 'Agua de Pepino', fr: 'Eau de Concombre' },
                        description: {
                            en: 'Natural diuretic to reduce fluid retention.',
                            es: 'Diurético natural para reducir retención de líquidos.',
                            fr: 'Diurétique naturel pour réduire la rétention d\'eau.'
                        },
                        preparation: {
                            en: 'Drink water infused with cucumber slices.',
                            es: 'Bebe agua infusionada con rodajas de pepino.',
                            fr: 'Buvez de l\'eau infusée de tranches de concombre.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-cucumber', quantity: { en: '1/2 cucumber', es: '1/2 pepino', fr: '1/2 concombre' } }
                        ]
                    },
                    {
                        name: { en: 'Epsom Foot Bath', es: 'Baño de Pies Epsom', fr: 'Bain de Pieds Epsom' },
                        description: {
                            en: 'Draws out fluid and relaxes.',
                            es: 'Extrae líquido y relaja.',
                            fr: 'Aspire le liquide et détend.'
                        },
                        preparation: {
                            en: 'Soak feet in warm epsom water for 15 mins.',
                            es: 'Remoja pies en agua tibia con epsom por 15 mins.',
                            fr: 'Trempez les pieds dans l\'eau epsom tiède pendant 15 min.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-epsom-salt', quantity: { en: '1 cup', es: '1 taza', fr: '1 tasse' } }
                        ]
                    }
                ]
            },
            {
                name: { en: 'Restless Leg Syndrome', es: 'Síndrome de Piernas Inquietas', fr: 'Syndrome des Jambes Sans Repos' },
                remedies: [
                    {
                        name: { en: 'Lavender Massage', es: 'Masaje de Lavanda', fr: 'Massage à la Lavande' },
                        description: {
                            en: 'Calms nerve activity.',
                            es: 'Calma la actividad nerviosa.',
                            fr: 'Calme l\'activité nerveuse.'
                        },
                        preparation: {
                            en: 'Massage legs with lavender oil before bed.',
                            es: 'Masajea las piernas con aceite de lavanda antes de dormir.',
                            fr: 'Massez les jambes avec de l\'huile de lavande avant de dormir.'
                        },
                        ingredients: [
                            { ingredientId: 'ing-lavender', quantity: { en: '5 drops', es: '5 gotas', fr: '5 gouttes' } },
                            { ingredientId: 'ing-olive-oil', quantity: { en: '1 tbsp', es: '1 cda', fr: '1 c. à soupe' } }
                        ]
                    }
                ]
            }
        ]
    }
];
