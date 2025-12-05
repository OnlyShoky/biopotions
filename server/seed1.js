const mongoose = require('mongoose');
const dotenv = require('dotenv');
const BodyPart = require('./models/BodyPart');
const Ingredient = require('./models/Ingredient');
const connectDB = require('./config/db');

dotenv.config();

const ingredientsData = [
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
        commonUses: ['Sore Throat', 'Cough', 'Wounds', 'Skin Hydration']
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
        commonUses: ['Cough', 'Sore Throat', 'Digestion', 'Immunity']
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
        commonUses: ['Infections', 'High Blood Pressure', 'Colds']
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
        commonUses: ['Nausea', 'Digestion', 'Inflammation', 'Colds']
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
        commonUses: ['Insomnia', 'Anxiety', 'Indigestion']
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
        commonUses: ['Burns', 'Skin Irritation', 'Wounds']
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
        commonUses: ['Digestion', 'Sore Throat', 'Skin Toner']
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
        commonUses: ['Inflammation', 'Joint Pain', 'Digestion']
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
        commonUses: ['Sore Throat', 'Wounds', 'Nasal Congestion']
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
            { property: { en: 'Moisturizing', es: 'Hidratante', es: 'Hidratante', fr: 'Hydratant' }, description: { en: 'Deeply hydrates', es: 'Hidrata profundamente', fr: 'Hydrate en profondeur' } },
            { property: { en: 'Antimicrobial', es: 'Antimicrobiano', fr: 'Antimicrobien' }, description: { en: 'Fights bacteria', es: 'Combate bacterias', fr: 'Combat les bactéries' } }
        ],
        dosage: { en: 'Apply topically', es: 'Aplicar tópicamente', fr: 'Appliquer localement' },
        category: 'food',
        safetyRating: 1,
        versatilityScore: 7,
        commonUses: ['Dry Skin', 'Hair Care', 'Energy']
    },
    {
        _id: 'ing-baking-soda',
        name: { en: 'Baking Soda', es: 'Bicarbonato de Sodio', fr: 'Bicarbonate de Soude' },
        scientificName: 'Sodium bicarbonate',
        description: {
            en: 'Alkaline compound used as antacid and cleaner.',
            es: 'Compuesto alcalino usado como antiácido y limpiador.',
            fr: 'Composé alcalin utilisé como antiacide et nettoyant.'
        },
        properties: [
            { property: { en: 'Antacid', es: 'Antiácido', fr: 'Antiacide' }, description: { en: 'Neutralizes acid', es: 'Neutraliza el ácido', fr: 'Neutralise l\'acide' } },
            { property: { en: 'Exfoliant', es: 'Exfoliante', fr: 'Exfoliant' }, description: { en: 'Gentle scrub', es: 'Exfoliante suave', fr: 'Gommage doux' } }
        ],
        dosage: { en: '1/2 tsp in water', es: '1/2 cdita en agua', fr: '1/2 c. à café dans l\'eau' },
        category: 'mineral',
        safetyRating: 2,
        versatilityScore: 6,
        commonUses: ['Heartburn', 'Insect Bites', 'Exfoliation']
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
        commonUses: ['Diabetes', 'Infections', 'Digestion']
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
        commonUses: ['Indigestion', 'Headache', 'Congestion']
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
        commonUses: ['Puffy Eyes', 'Sunburn', 'Hydration']
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
        versatilityScore: 6,
        commonUses: ['Dry Skin', 'Earache', 'Cooking']
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
        commonUses: ['Toothache', 'Infections', 'Muscle Pain']
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
        commonUses: ['Cough', 'Bronchitis', 'Digestion']
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
        commonUses: ['Memory', 'Muscle Pain', 'Hair Growth']
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
        commonUses: ['Infections', 'Digestion', 'Immunity']
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
        commonUses: ['Anxiety', 'Sleep', 'Burns']
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
        commonUses: ['Congestion', 'Colds', 'Muscle Pain']
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
        commonUses: ['Cough', 'Colds', 'Infections']
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
        commonUses: ['Vision', 'Skin Care', 'Immunity']
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
        commonUses: ['Eczema', 'Digestion', 'Energy']
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
        commonUses: ['Indigestion', 'Skin', 'Parasites']
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
        commonUses: ['Inflammation', 'Digestion', 'Cough']
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
        commonUses: ['Gas', 'Bloating', 'Colic']
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
        commonUses: ['Sore Throat', 'Sweating', 'Memory']
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
        commonUses: ['Fatigue', 'Stress', 'Immunity']
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
        commonUses: ['Insomnia', 'Anxiety', 'Muscle Pain']
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
        commonUses: ['Muscle Pain', 'Stress', 'Splinters']
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
        commonUses: ['Cramps', 'Digestion', 'Energy']
    }
];

const seedData = [
    {
        _id: '1',
        bodyPart: { en: 'Throat', es: 'Garganta', fr: 'Gorge' },
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
            }
        ]
    },
    {
        _id: '2',
        bodyPart: { en: 'Head', es: 'Cabeza', fr: 'Tête' },
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
            }
        ]
    },
    {
        _id: '3',
        bodyPart: { en: 'Stomach', es: 'Estómago', fr: 'Estomac' },
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
            }
        ]
    },
    {
        _id: '4',
        bodyPart: { en: 'Skin', es: 'Piel', fr: 'Peau' },
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
            }
        ]
    },
    {
        _id: '5',
        bodyPart: { en: 'Chest', es: 'Pecho', fr: 'Poitrine' },
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
            }
        ]
    },
    {
        _id: '6',
        bodyPart: { en: 'Eyes', es: 'Ojos', fr: 'Yeux' },
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
            }
        ]
    },
    {
        _id: '7',
        bodyPart: { en: 'Back', es: 'Espalda', fr: 'Dos' },
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
            }
        ]
    },
    {
        _id: '8',
        bodyPart: { en: 'Legs', es: 'Piernas', fr: 'Jambes' },
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
            }
        ]
    }
];

const importData = async () => {
    try {
        await connectDB();

        await Ingredient.deleteMany();
        await BodyPart.deleteMany();

        await Ingredient.insertMany(ingredientsData);
        await BodyPart.insertMany(seedData);

        console.log('Ingredients and BodyParts Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
