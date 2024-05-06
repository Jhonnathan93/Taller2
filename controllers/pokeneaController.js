const pokeneas = require('../config/pokeneas');

function obtenerPokeneaAleatorio() {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    return pokeneas[randomIndex];
}

function getPokenea(req, res) {
    const randomPokenea = obtenerPokeneaAleatorio();
    const response = {
        id: randomPokenea.id,
        nombre: randomPokenea.nombre,
        altura: randomPokenea.altura,
        habilidad: randomPokenea.habilidad
    };
    res.json(response);
}

module.exports = { getPokenea };