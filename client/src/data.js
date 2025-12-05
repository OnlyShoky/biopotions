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
        // image: honeyImg,
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
        safetyRating: 1
    },
    {
        _id: 'ing-lemon',
        name: { en: 'Lemon', es: 'Limón', fr: 'Citron' },
        scientificName: 'Citrus limon',
        // image: lemonImg,
        description: {
            en: 'Rich in Vitamin C and antioxidants.',
            es: 'Rico en Vitamina C and antioxidants.',
            fr: 'Riche en Vitamine C et antioxydants.'
        },
        properties: [
            { property: { en: 'Antioxidant', es: 'Antioxidante', fr: 'Antioxydant' }, description: { en: 'Boosts immune system', es: 'Refuerza el sistema inmunológico', fr: 'Renforce le système immunitaire' } }
        ],
        dosage: { en: 'As needed', es: 'Según sea necesario', fr: 'Au besoin' },
        category: 'food',
        safetyRating: 1
    },
    {
        _id: 'ing-salt',
        name: { en: 'Sea Salt', es: 'Sal Marina', fr: 'Sel Marin' },
        scientificName: 'Sodium chloride',
        // image: saltImg,
        description: {
            en: 'Natural mineral with antiseptic properties.',
            es: 'Mineral natural con propiedades antisépticas.',
            fr: 'Minéral naturel aux propriétés antiseptiques.'
        },
        properties: [
            { property: { en: 'Antiseptic', es: 'Antiséptico', fr: 'Antiseptique' }, description: { en: 'Cleanses wounds and reduces bacteria', es: 'Limpia heridas y reduce bacterias', fr: 'Nettoie les plaies et réduit les bactéries' } }
        ],
        dosage: { en: '1/2 tsp for gargle', es: '1/2 cdita para gárgaras', fr: '1/2 c. à café pour gargarisme' },
        category: 'mineral',
        safetyRating: 1
    },
    {
        _id: 'ing-peppermint',
        name: { en: 'Peppermint Oil', es: 'Aceite de Menta', fr: 'Huile de Menthe Poivrée' },
        scientificName: 'Mentha × piperita',
        // image: peppermintImg,
        description: {
            en: 'Concentrated oil with cooling menthol.',
            es: 'Aceite concentrado con mentol refrescante.',
            fr: 'Huile concentrée au menthol rafraîchissant.'
        },
        properties: [
            { property: { en: 'Analgesic', es: 'Analgésico', fr: 'Analgésique' }, description: { en: 'Relieves pain', es: 'Alivia el dolor', fr: 'Soulage la douleur' } },
            { property: { en: 'Cooling', es: 'Refrescante', fr: 'Rafraîchissant' }, description: { en: 'Soothes inflammation', es: 'Calma la inflamación', fr: 'Apaise l\'inflammation' } }
        ],
        dosage: { en: '1-2 drops diluted', es: '1-2 gotas diluidas', fr: '1-2 gouttes diluées' },
        warnings: { en: 'Do not ingest neat essential oil. Avoid eyes.', es: 'No ingerir aceite esencial puro. Evitar ojos.', fr: 'Ne pas ingérer d\'huile essentielle pure. Éviter les yeux.' },
        category: 'essential-oil',
        safetyRating: 3
    },
    {
        _id: 'ing-ginger',
        name: { en: 'Ginger', es: 'Jengibre', fr: 'Gingembre' },
        scientificName: 'Zingiber officinale',
        // image: gingerImg,
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
        safetyRating: 1
    },
    {
        _id: 'ing-chamomile',
        name: { en: 'Chamomile', es: 'Manzanilla', fr: 'Camomille' },
        scientificName: 'Matricaria chamomilla',
        image: '/assets/ingredients/chamomile.png',
        description: {
            en: 'Gentle flower with calming effects.',
            es: 'Flor suave con efectos calmantes.',
            fr: 'Fleur douce aux effets calmants.'
        },
        properties: [
            { property: { en: 'Sedative', es: 'Sedante', fr: 'Sédatif' }, description: { en: 'Promotes sleep and relaxation', es: 'Promueve el sueño y la relajación', fr: 'Favorise le sommeil et la relaxation' } }
        ],
        dosage: { en: '1 cup tea', es: '1 taza de té', fr: '1 tasse de thé' },
        category: 'herb',
        safetyRating: 1
    },
    {
        _id: 'ing-aloe',
        name: { en: 'Aloe Vera', es: 'Aloe Vera', fr: 'Aloe Vera' },
        scientificName: 'Aloe barbadensis miller',
        image: '/assets/ingredients/aloe.png',
        description: {
            en: 'Succulent plant with healing gel.',
            es: 'Planta suculenta con gel curativo.',
            fr: 'Plante succulente au gel cicatrisant.'
        },
        properties: [
            { property: { en: 'Moisturizing', es: 'Hidratante', fr: 'Hydratant' }, description: { en: 'Hydrates skin', es: 'Hidrata la piel', fr: 'Hydrate la peau' } },
            { property: { en: 'Cooling', es: 'Refrescante', fr: 'Rafraîchissant' }, description: { en: 'Soothes burns', es: 'Alivia quemaduras', fr: 'Apaise les brûlures' } }
        ],
        dosage: { en: 'Apply liberally', es: 'Aplicar generosamente', fr: 'Appliquer généreusement' },
        category: 'herb',
        safetyRating: 1
    },
    {
        _id: 'ing-cucumber',
        name: { en: 'Cucumber', es: 'Pepino', fr: 'Concombre' },
        scientificName: 'Cucumis sativus',
        image: '/assets/ingredients/cucumber.png',
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
        safetyRating: 1
    },
    {
        _id: 'ing-epsom-salt',
        name: { en: 'Epsom Salt', es: 'Sales de Epsom', fr: 'Sel d\'Epsom' },
        scientificName: 'Magnesium sulfate',
        image: '/assets/ingredients/epsom.png',
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
        safetyRating: 1
    },
    {
        _id: 'ing-turmeric',
        name: { en: 'Turmeric', es: 'Cúrcuma', fr: 'Curcuma' },
        scientificName: 'Curcuma longa',
        image: '/assets/ingredients/turmeric.png',
        description: {
            en: 'Bright yellow spice with strong anti-inflammatory effects.',
            es: 'Especia amarilla brillante con fuertes efectos antiinflamatorios.',
            fr: 'Épice jaune vif aux effets anti-inflammatoires puissants.'
        },
        properties: [
            { property: { en: 'Anti-inflammatory', es: 'Antiinflamatorio', fr: 'Anti-inflammatoire' }, description: { en: 'Reduces joint pain', es: 'Reduce dolor articular', fr: 'Réduit les douleurs articulaires' } }
        ],
        dosage: { en: '1 tsp powder', es: '1 cdita polvo', fr: '1 c. à café poudre' },
        category: 'spice',
        safetyRating: 1
    },
    {
        _id: 'ing-banana',
        name: { en: 'Banana', es: 'Banana', fr: 'Banane' },
        scientificName: 'Musa',
        image: '/assets/ingredients/banana.png',
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
        safetyRating: 1
    },
    {
        _id: 'ing-thyme',
        name: { en: 'Thyme', es: 'Aloe', fr: 'Aloe' },
        scientificName: 'Aloe barbadensis miller',
        image: '/assets/ingredients/aloe.png',
        description: {
            en: 'Succulent plant with healing gel.',
            es: 'Planta suculenta con gel curativo.',
            fr: 'Plante succulente au gel cicatrisant.'
        },
        properties: [
            { property: { en: 'Moisturizing', es: 'Hidratante', fr: 'Hydratant' }, description: { en: 'Hydrates skin', es: 'Hidrata la piel', fr: 'Hydrate la peau' } },
            { property: { en: 'Cooling', es: 'Refrescante', fr: 'Rafraîchissant' }, description: { en: 'Soothes burns', es: 'Alivia quemaduras', fr: 'Apaise les brûlures' } }
        ],
        dosage: { en: 'Apply liberally', es: 'Aplicar generosamente', fr: 'Appliquer généreusement' },
        category: 'herb',
        safetyRating: 1
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
            }
        ]
    }
];
