'use strict';

module.exports = function (app) {
    const dog = new app.controllers.Dog();

    return [
        {
            method: 'get',
            url: '/dog',
            action: dog.list.bind(dog),
            cors: true
        }
    ];
};
