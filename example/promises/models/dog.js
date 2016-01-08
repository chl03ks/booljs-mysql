'use strict';

module.exports = function (app, connection) {

    this.test = function() {
        return connection.query('SELECT 1;');
    };

    return this;
};
