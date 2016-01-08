'use strict';

module.exports = function(app){

    var dog = new app.models.Dog();

    this.test = function(){
        return dog.test();
    };

    return this;
};
