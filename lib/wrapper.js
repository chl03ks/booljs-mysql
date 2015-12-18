'use strict';

module.exports = function (_instance, path, connection) {
    var Model = require(path);

    return function () {
        return new Model(
            _instance.getComponents(), connection
        );
    };
};
