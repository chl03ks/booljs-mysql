'use strict';

var API = require('bool.js/api');

module.exports = new API.DatabaseLoader(
    'booljs-mysql', // Name
    require('./lib') // Functions
);
