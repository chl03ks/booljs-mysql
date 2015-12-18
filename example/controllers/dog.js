'use strict';

module.exports = function(app){

    var Dog     = app.dao.Dog
    ,   json    = new app.views.Json();

    return {
        list: function(req, res, next){
            var dog = new Dog();
            dog.test(function (err, data) {
                if(err) return json.error(err, res);
                json.standard(data, res);
            });
        }
    };

};
