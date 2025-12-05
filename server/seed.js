const mongoose = require('mongoose');
const dotenv = require('dotenv');
const BodyPart = require('./models/BodyPart');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const seedData = [
    {
        _id: '1',
        bodyPart: {
            en: 'Throat',
            es: 'Garganta',
            fr: 'Gorge'
        },
        ailments: [
            {
                name: {
                    en: 'Sore Throat [BACKEND]',
                    es: 'Dolor de Garganta [BACKEND]',
                    fr: 'Mal de Gorge [BACKEND]'
                },
                remedies: [
                    {
                        name: {
                            en: 'Honey & Lemon Tea',
                            es: 'Té de Miel y Limón',
                            fr: 'Thé au Miel et Citron'
                        },
                        description: {
                            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Backend data test.',
                            es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prueba de datos del backend.',
                            fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Test de données backend.'
                        },
                        preparation: {
                            en: 'Mix 1 tbsp lorem and 1 tbsp ipsum in warm water. Drink slowly.',
                            es: 'Mezcla 1 cda de lorem y 1 cda de ipsum en agua tibia. Bebe despacio.',
                            fr: 'Mélangez 1 c. à soupe de lorem et 1 c. à soupe de ipsum dans de l\'eau tiède. Buvez lentement.'
                        },
                        warnings: {
                            en: 'Do not give lorem to children under 1 year old.',
                            es: 'No dar lorem a niños menores de 1 año.',
                            fr: 'Ne pas donner de lorem aux enfants de moins d\'un an.'
                        }
                    },
                    {
                        name: {
                            en: 'Salt Water Gargle',
                            es: 'Gárgaras de Agua Salada',
                            fr: 'Gargarisme à l\'Eau Salée'
                        },
                        description: {
                            en: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            es: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            fr: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        preparation: {
                            en: 'Dissolve 1/2 tsp salt in a glass of warm water. Gargle for 30 seconds.',
                            es: 'Disuelve 1/2 cdita de sal en un vaso de agua tibia. Haz gárgaras por 30 segundos.',
                            fr: 'Dissoudre 1/2 c. à café de sel dans un verre d\'eau tiède. Gargarisez-vous pendant 30 secondes.'
                        }
                    }
                ]
            }
        ]
    },
    {
        _id: '2',
        bodyPart: {
            en: 'Head',
            es: 'Cabeza',
            fr: 'Tête'
        },
        ailments: [
            {
                name: {
                    en: 'Headache [BACKEND]',
                    es: 'Dolor de Cabeza [BACKEND]',
                    fr: 'Maux de Tête [BACKEND]'
                },
                remedies: [
                    {
                        name: {
                            en: 'Peppermint Oil',
                            es: 'Aceite de Menta',
                            fr: 'Huile de Menthe Poivrée'
                        },
                        description: {
                            en: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                            es: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                            fr: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
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
                        name: {
                            en: 'Ginger Tea',
                            es: 'Té de Jengibre',
                            fr: 'Thé au Gingembre'
                        },
                        description: {
                            en: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
                            es: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
                            fr: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
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
        bodyPart: {
            en: 'Stomach',
            es: 'Estómago',
            fr: 'Estomac'
        },
        ailments: [
            {
                name: {
                    en: 'Indigestion [BACKEND]',
                    es: 'Indigestión [BACKEND]',
                    fr: 'Indigestion [BACKEND]'
                },
                remedies: [
                    {
                        name: {
                            en: 'Chamomile Tea',
                            es: 'Té de Manzanilla',
                            fr: 'Thé à la Camomille'
                        },
                        description: {
                            en: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
                            es: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
                            fr: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
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
        bodyPart: {
            en: 'Skin',
            es: 'Piel',
            fr: 'Peau'
        },
        ailments: [
            {
                name: {
                    en: 'Sunburn [BACKEND]',
                    es: 'Quemadura Solar [BACKEND]',
                    fr: 'Coup de Soleil [BACKEND]'
                },
                remedies: [
                    {
                        name: {
                            en: 'Aloe Vera',
                            es: 'Aloe Vera',
                            fr: 'Aloe Vera'
                        },
                        description: {
                            en: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
                            es: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
                            fr: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
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
        bodyPart: {
            en: 'Chest',
            es: 'Pecho',
            fr: 'Poitrine'
        },
        ailments: [
            {
                name: {
                    en: 'Cough [BACKEND]',
                    es: 'Tos [BACKEND]',
                    fr: 'Toux [BACKEND]'
                },
                remedies: [
                    {
                        name: {
                            en: 'Thyme Tea',
                            es: 'Té de Tomillo',
                            fr: 'Thé au Thym'
                        },
                        description: {
                            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Chest remedy test.',
                            es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prueba de remedio para el pecho.',
                            fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Test de remède pour la poitrine.'
                        },
                        preparation: {
                            en: 'Steep 2 tsp lorem in boiling ipsum for 10 mins.',
                            es: 'Deja reposar 2 cditas de lorem en ipsum hirviendo por 10 mins.',
                            fr: 'Laissez infuser 2 c. à café de lorem dans de l\'ipsum bouillante pendant 10 min.'
                        },
                        warnings: {
                            en: 'Consult a doctor if symptoms persist. [BACKEND WARNING]',
                            es: 'Consulte a un médico si los síntomas persisten. [ADVERTENCIA BACKEND]',
                            fr: 'Consultez un médecin si les symptômes persistent. [AVERTISSEMENT BACKEND]'
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
        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
