'use strict';

module.exports = function(app){

    var dog = new app.models.Dog();

    return {
        test: function(){
            return dog.test();
        }
    };

};
