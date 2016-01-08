'use strict';

var mysql = require('mysql');

module.exports = function (settings) {
    var configuration   = settings[process.env.NODE_ENV || 'development']
    ,   connectionConf  = _.omit(configuration, [ 'promises', 'pool' ]);

    if(configuration.pool) {
        return q.resolve(mysql.createPool(_.extend({
            connectionLimit: 1000, waitForConnections: true
        }, connectionConf)));
    } else {
        var connection = mysql.createConnection(connectionConf);
        return q.nbind(connection.connect, connection)().then(function () {
            return q.resolve(connection);
        });
    }

};
