'use strict';

const MySQL = require('mysql2');
const EmptyModel = require('./model');

const { DatabaseLoader } = require('booljs.api');
const { readFileSync } = require('fs');
const { join } = require('path');

module.exports = class BoolJSMySQL extends DatabaseLoader {
    constructor () { super('booljs.mysql'); }

    async openDatabase (configuration) {
        const settings = configuration[process.env.NODE_ENV || 'development'];
        const { promises, pool, ...connectionOptions } = settings;

        let connection;
        if (pool !== undefined && pool !== null) {
            const connectionLimit = 1000;
            const waitForConnections = true;

            connection = await MySQL.createPool({
                connectionLimit, waitForConnections, ...connectionOptions
            });
        } else {
            connection = await MySQL.createConnection(connectionOptions);
        }

        return connection;
    };

    async fetchModels (instance, models, Component, connection) {
        return class extends EmptyModel {
            constructor (...params) {
                return new (Function.prototype.bind.apply(Component, [
                    null, instance.getComponents(), connection
                ].concat(params)))();
            }
        };
    }

    modelClass () {
        return EmptyModel;
    }

    modelTemplate () {
        return readFileSync(join(require.resolve('.'), 'templates/model.js'));
    }

    modelConfiguration () {
        return readFileSync(
            join(require.resolve('.'), 'templates/configuration.json'));
    }
};
