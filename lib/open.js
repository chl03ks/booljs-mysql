'use strict';

var mysql = require('mysql');

module.exports = function (settings) {
    var configuration   = settings[process.env.NODE_ENV || 'development']
    ,   connection      = mysql.createConnection(configuration);

    return q.nbind(connection.connect, connection)();
};
