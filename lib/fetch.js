'use strict';

var async   = require('async')
,   wrap    = require('./wrapper')
,   myWrap  = require('mysql-wrap');

module.exports = function (_instance, models, connection) {
    var settings    = _instance.getComponents().configuration.get('database')
    ,   cSettings   = settings[process.env.NODE_ENV || 'development'];

    var fetch = q.nbind(async.forEachOfSeries, async);

    var _connection = (
        (cSettings && cSettings.promises) && myWrap(connection)
    ) || connection;

    return fetch(models, function (path, name, next) {
        var _model = wrap(_instance, path, _connection);

        _instance.insertComponent(
            name, _model, _instance.getComponents().models
        );
        next();
    });
};
