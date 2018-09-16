'use strict';

module.exports = class DogDAO {
    constructor (app) {
        this.dog = new app.models.Dog();
    }

    test (next) {
        return this.dog.test(next);
    }
};
