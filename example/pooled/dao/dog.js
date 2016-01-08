'use strict';

module.exports = function(app){

    var dog = new app.models.Dog();

    return {
        test: function(next){
            dog.test(next);
        }
    };

};
