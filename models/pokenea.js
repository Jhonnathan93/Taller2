const pokeneas = require('../database/pokeneas');

class Pokenea {
    constructor(id, name, height, ability, image, philosophicalPhrase) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.ability = ability;
        this.image = image;
        this.philosophicalPhrase = philosophicalPhrase;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getHeight() {
        return this.height;
    }

    getAbility() {
        return this.ability;
    }

    getImage() {
        return this.image;
    }

    getPhilosophicalPhrase() {
        return this.philosophicalPhrase;
    }
}

module.exports = Pokenea;