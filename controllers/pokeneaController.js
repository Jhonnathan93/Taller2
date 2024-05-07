const os = require("os");
const pokeneaModel = require('../models/pokenea');
const pokeneasData = require('../models/pokeneas');

function getRandomPokenea(pokeneas) {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    return pokeneas[randomIndex];
}

function getRandomPokeneaJson(req, res) {
    const randomPokenea = getRandomPokenea(pokeneasData);
    const response = {
        id: pokeneaModel.getId(randomPokenea),
        name: pokeneaModel.getName(randomPokenea),
        height: pokeneaModel.getHeight(randomPokenea),
        ability: pokeneaModel.getAbility(randomPokenea),
    };
    res.json(response);
}

function getRandomPokeneaHtml(req, res) {
    const randomPokenea = getRandomPokenea(pokeneasData);
    const response = {
        image: pokeneaModel.getImage(randomPokenea),
        phrase: pokeneaModel.getPhilosophicalPhrase(randomPokenea),
        containerId: os.hostname()
    };
    res.render('pokenea', { viewData: response });
}

module.exports = { 
    getRandomPokeneaJson,
    getRandomPokeneaHtml,
};