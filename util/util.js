const Pokenea = require('../models/pokenea');

function instantiatePokeneas(pokeneasData, pokeneasArray) {
    pokeneasData.forEach(data => {
        const pokeneaInstance = new Pokenea(data.id, data.name, data.height, data.ability, data.image, data.philosophicalPhrase);
        pokeneasArray.push(pokeneaInstance);
    });
}

module.exports= {instantiatePokeneas};