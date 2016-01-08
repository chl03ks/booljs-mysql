'use strict';

var dogs = [];

module.exports = function (app, connection) {

    this.test = function(next) {
        connection.query('SELECT 1;', next);
    };
};
