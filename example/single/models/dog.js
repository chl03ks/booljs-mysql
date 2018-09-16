'use strict';

const MySQLModel = require('../../../model');

module.exports = class DogModel extends MySQLModel {
    constructor (app, connection) {
        super();
        this.connection = connection;
    }

    test (next) {
        this.connection.query('SELECT 1;', next);
    }
};
