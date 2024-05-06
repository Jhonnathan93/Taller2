const pokenea = require('../models/pokenea');
const pokeneas = require('../config/pokeneas');
const os = require("os")

function obtenerPokeneaAleatorio(pokeneas) {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    return pokeneas[randomIndex];
}

function getPokeneaAleatorioJson(req, res) {
    const randomPokenea = obtenerPokeneaAleatorio(pokeneas);
    const response = {
        id: pokenea.getId(randomPokenea),
        nombre: pokenea.getNombre(randomPokenea),
        altura: pokenea.getAltura(randomPokenea),
        habilidad: pokenea.getHabilidad(randomPokenea),
    };
    res.json(response);
}

function getPokeneaAleatorioHTML(req, res) {
    const randomPokenea = obtenerPokeneaAleatorio(pokeneas);
    const response = {
        imagen: pokenea.getImagen(randomPokenea),
        frase: pokenea.getFraseFilosofica(randomPokenea),
        containerId: os.hostname()
    };
    res.render('pokenea', { viewData: response });
}

module.exports = { 
    getPokeneaAleatorioJson,
    getPokeneaAleatorioHTML,
};