'use strict';

var dogs = [];

module.exports = function (app, connection) {

    this.test = function() {
        return connection.query('SELECT 1;');
    };
};
