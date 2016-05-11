'use strict';

const API = require('booljs-api')
,     lib = require('./lib');

module.exports = class BoolJSMySQL extends API.DatabaseLoader {
    constructor() {
        super('booljs-mysql');
    }

    openDatabase(configuration){
        return lib.openDatabase(configuration);
    }

    fetchModels(_instance, models, connection){
        return lib.fetchModels(_instance, models, connection);
    }

    modelTemplate(){
        return lib.modelTemplate();
    }

    modelConfiguration(){
        return lib.modelConfiguration();
    }
};
