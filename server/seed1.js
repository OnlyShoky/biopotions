const mongoose = require('mongoose');
const dotenv = require('dotenv');
const BodyPart = require('./models/BodyPart');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const seedData = [
    // --- Original Data ---
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
                            en: 'Mix 1 tbsp honey and 1 tbsp lemon juice in warm water. Drink slowly.',
                            es: 'Mezcla 1 cda de miel y 1 cda de jugo de limón en agua tibia. Bebe despacio.',
                            fr: 'Mélangez 1 c. à soupe de miel et 1 c. à soupe de jus de citron dans de l\'eau tiède. Buvez lentement.'
                        },
                        warnings: {
                            en: 'Do not give honey to children under 1 year old.',
                            es: 'No dar miel a niños menores de 1 año.',
                            fr: 'Ne pas donner de miel aux enfants de moins d\'un an.'
                        }
                    },
                    {
                        name: { en: 'Salt Water Gargle', es: 'Gárgaras de Agua Salada', fr: 'Gargarisme à l\'Eau Salée' },
                        description: {
                            en: 'Reduces swelling and kills bacteria in the throat.',
                            es: 'Reduce la inflamación y mata las bacterias en la garganta.',
                            fr: 'Réduit l\'enflure et tue les bactéries dans la gorge.'
                        },
                        preparation: {
                            en: 'Dissolve 1/2 tsp salt in a glass of warm water. Gargle for 30 seconds and spit out.',
                            es: 'Disuelve 1/2 cdita de sal en un vaso de agua tibia. Haz gárgaras por 30 segundos y escupe.',
                            fr: 'Dissoudre 1/2 c. à café de sel dans un verre d\'eau tiède. Gargarisez-vous pendant 30 secondes et recrachez.'
                        }
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
                        warnings: {
                            en: 'Avoid contact with eyes.',
                            es: 'Evitar contacto con los ojos.',
                            fr: 'Éviter le contact avec les yeux.'
                        }
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
                        }
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
                        }
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
                        }
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
                        }
                    }
                ]
            }
        ]
    },
    // --- New Expanded Data ---
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
                            en: 'Provides a cooling effect and hydrates the skin around the eyes.',
                            es: 'Proporciona un efecto refrescante e hidrata la piel alrededor de los ojos.',
                            fr: 'Procure un effet rafraîchissant et hydrate la peau autour des yeux.'
                        },
                        preparation: {
                            en: 'Place chilled cucumber slices over closed eyes for 10-15 minutes.',
                            es: 'Coloca rodajas de pepino frías sobre los ojos cerrados durante 10-15 minutos.',
                            fr: 'Placez des tranches de concombre réfrigérées sur les yeux fermés pendant 10 à 15 minutes.'
                        }
                    },
                    {
                        name: { en: 'Warm Compress', es: 'Compresa Tibia', fr: 'Compresse Chaude' },
                        description: {
                            en: 'Helps unclog oil glands and relieves dryness.',
                            es: 'Ayuda a destapar las glándulas sebáceas y alivia la sequedad.',
                            fr: 'Aide à déboucher les glandes sébacées et soulage la sécheresse.'
                        },
                        preparation: {
                            en: 'Soak a clean cloth in warm water, wring it out, and place over eyes for 5-10 minutes.',
                            es: 'Remoja un paño limpio en agua tibia, escúrrelo y colócalo sobre los ojos por 5-10 minutos.',
                            fr: 'Trempez un linge propre dans de l\'eau tiède, essorez-le et placez-le sur les yeux pendant 5 à 10 minutes.'
                        }
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
                            en: 'Magnesium in the salt helps relax muscles and reduce inflammation.',
                            es: 'El magnesio en la sal ayuda a relajar los músculos y reducir la inflamación.',
                            fr: 'Le magnésium contenu dans le sel aide à détendre les muscles et à réduire l\'inflammation.'
                        },
                        preparation: {
                            en: 'Add 2 cups of Epsom salt to a warm bath and soak for 20 minutes.',
                            es: 'Agrega 2 tazas de sales de Epsom a un baño tibio y remójate por 20 minutos.',
                            fr: 'Ajoutez 2 tasses de sel d\'Epsom à un bain chaud et laissez tremper pendant 20 minutes.'
                        }
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
                        name: { en: 'Banana', es: 'Plátano', fr: 'Banane' },
                        description: {
                            en: 'Rich in potassium, which helps prevent muscle cramps.',
                            es: 'Rico en potasio, que ayuda a prevenir los calambres musculares.',
                            fr: 'Riche en potassium, ce qui aide à prévenir les crampes musculaires.'
                        },
                        preparation: {
                            en: 'Eat a banana daily, especially after exercise.',
                            es: 'Come un plátano diariamente, especialmente después de hacer ejercicio.',
                            fr: 'Mangez une banane par jour, surtout après l\'exercice.'
                        }
                    }
                ]
            }
        ]
    }
];

const importData = async () => {
    try {
        await BodyPart.deleteMany();
        await BodyPart.insertMany(seedData);
        console.log('Data Imported with Expanded Examples!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
