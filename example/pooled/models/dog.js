'use strict';

const MySQLModel = require('../../../model');

module.exports = class DogModel extends MySQLModel {
    constructor (app, connection) {
        super();
        this.connection = await connection.promise();
    }

    async test () {
        const [ rows ] = this.connection.query('SELECT 1');
        return rows;
    }
};
