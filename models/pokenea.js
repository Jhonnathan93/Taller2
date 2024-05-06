const pokeneas = require('../config/pokeneas');

function getId(pokenea) {
    return pokenea.id;
}

function getNombre(pokenea) {
    return pokenea.nombre;
}

function getAltura(pokenea) {
    return pokenea.altura;
}

function getHabilidad(pokenea) {
    return pokenea.habilidad;
}

function getImagen(pokenea) {
    return pokenea.imagen;
}

function getFraseFilosofica(pokenea) {
    return pokenea.frase_filosofica;
}

module.exports = {
    getId,
    getNombre,
    getAltura,
    getHabilidad,
    getImagen,
    getFraseFilosofica
};