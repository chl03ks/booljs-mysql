'use strict';

const MySQLModel = require('../../../model');

module.exports = class DogModel extends MySQLModel {
    constructor (app, connection) {
        super();
        this.connection = connection.promise();
    }

    async test () {
        const { connection } = this;

        const [ rows ] = await connection.query('SELECT 1');
        return rows;
    }
};
