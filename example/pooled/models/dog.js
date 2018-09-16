'use strict';

const MySQLModel = require('../../../model');

module.exports = class DogModel extends MySQLModel {
    constructor (app, connection) {
        super();
        this.connection = connection;
    }

    async test () {
        const [ rows ] = await this.connection.promise().query('SELECT 1');
        return rows;
    }
};
