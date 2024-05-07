const os = require("os");
const pokeneaModel = require('../models/pokenea');
const pokeneasData = require('../database/pokeneas');
const instantiate = require('../util/util')

const pokeneasArray = []
instantiate.instantiatePokeneas(pokeneasData,pokeneasArray)

function getRandomPokenea(pokeneas) {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    return pokeneas[randomIndex];
}

function showJsonPokenea(req, res) {
    const randomPokenea = getRandomPokenea(pokeneasArray);
    const response = {
        id: randomPokenea.getId(),
        name: randomPokenea.getName(),
        height: randomPokenea.getHeight(),
        ability: randomPokenea.getAbility(),
    };
    res.json(response);
}

function showHtmlPokenea(req, res) {
    const randomPokenea = getRandomPokenea(pokeneasArray);
    const response = {
        image: randomPokenea.getImage(),
        phrase: randomPokenea.getPhilosophicalPhrase(),
        containerId: os.hostname()
    };
    res.render('pokenea', { viewData: response });
}

function homePage(req, res) {
    const response = {
        message: "Hello, welcome to the Pokenea application!"
    };
    res.render('index', {viewData: response});
}

module.exports = { 
    showJsonPokenea,
    showHtmlPokenea,
    homePage,
};