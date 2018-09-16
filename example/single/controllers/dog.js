'use strict';

module.exports = class DogController {
    constructor (app) {
        this.Dog = app.dao.Dog;
        this.Json = app.views.Json;
    }

    list (request, response, next) {
        const { Json, Dog } = this;
        const dao = new Dog();

        dao.test((error, data) => {
            if (error) {
                return new Json().error(error, response);
            }

            new Json().standard(data, response);
        });
    }
};
