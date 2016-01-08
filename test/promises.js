/* global describe, before, it */
'use strict';

describe('Promises-based connection', function () {
    var booljs      = require('bool.js')
    ,   chai        = require('chai')
    ,   asPromised  = require('chai-as-promised')
    ,   supertest   = require('supertest-as-promised')
    ,   app, Dog, dogDao, agent;

    chai.use(asPromised);
    var expect      = chai.expect;

    before(function () {
        return booljs('com.example.promises', [ require.resolve('..') ])
            .setBase('example/promises')
            .setDatabaseLoader('booljs-mysql')
            .run()
        .then(function (api) {
            app = api.app;
            Dog = new app.models.Dog();
            dogDao = new app.dao.Dog();
            agent = supertest(api.server);
            return q.resolve();
        });
    });

    describe('Model', function () {

        it('retrieves a test element', function () {
            return Dog.test().then(function (data) {
                expect(data).to.have.length(1);
            });
        });

    });

    describe('DAO', function () {

        it('retrieves a single test element', function () {
            return Dog.test().then(function (data) {
                expect(data).to.have.length(1);
            });
        });

    });

    describe('Controller', function () {

        it('retrieves a single test element', function () {

            return agent.get('/dog').expect(200).then(function (response) {
                expect(response.body.data).to.have.length(1);
            });


        });

    });

});
