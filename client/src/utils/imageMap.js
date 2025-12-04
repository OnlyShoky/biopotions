import throatImg from '../assets/throat.png';
import headImg from '../assets/head.png';
import stomachImg from '../assets/stomach.png';
import skinImg from '../assets/skin.png';
import chestImg from '../assets/chest.png';
import eyesImg from '../assets/eyes.png';
import backImg from '../assets/back.png';
import legsImg from '../assets/legs.png';

const imageMap = {
    'Throat': throatImg,
    'Head': headImg,
    'Stomach': stomachImg,
    'Skin': skinImg,
    'Chest': chestImg,
    'Eyes': eyesImg,
    'Back': backImg,
    'Legs': legsImg
};

export const getBodyPartImage = (englishName) => {
    return imageMap[englishName] || null;
};
