'use strict';

module.exports = class DogController {
    constructor (app) {
        this.Dog = app.dao.Dog;
        this.Json = app.views.Json;
    }

    list (request, response, next) {
        const { Json, Dog } = this;
        const dao = new Dog();

        return new Json().promise(dao.test(), response, next);
    }
};
