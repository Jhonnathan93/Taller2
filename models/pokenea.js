const pokeneas = require('./pokeneas');

function getId(pokenea) {
    return pokenea.id;
}

function getName(pokenea) {
    return pokenea.name;
}

function getHeight(pokenea) {
    return pokenea.height;
}

function getAbility(pokenea) {
    return pokenea.ability;
}

function getImage(pokenea) {
    return pokenea.image;
}

function getPhilosophicalPhrase(pokenea) {
    return pokenea.philosophicalPhrase;
}

module.exports = {
    getId,
    getName,
    getHeight,
    getAbility,
    getImage,
    getPhilosophicalPhrase
};