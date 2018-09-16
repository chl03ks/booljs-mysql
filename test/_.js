'use strict';

// Configure test environment
process.env.HOST        = process.env.HOSTNAME = '0.0.0.0';
process.env.NODE_ENV    = process.env.TEST_ENV || process.env.NODE_ENV || 'test';

// Configure chai environment
const chai              = require('chai');
const promised          = require('chai-as-promised');
global.Agent            = require('supertest');

chai.use(promised);
chai.should();
global.expect           = chai.expect;
global.assert           = chai.assert;
