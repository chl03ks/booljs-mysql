/* global describe, before, it */
'use strict';

describe('Single connection', function () {
    var booljs      = require('bool.js')
    ,   chai        = require('chai')
    ,   asPromised  = require('chai-as-promised')
    ,   supertest   = require('supertest-as-promised')
    ,   app, Dog, dogDao, agent;

    chai.use(asPromised);
    var expect      = chai.expect;

    before(function () {
        return booljs('com.example.api', [ require.resolve('..') ])
            .setBase('example/single')
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

        it('retrieves a test element', function (done) {
            Dog.test(function (err, data) {
                if(err) return done(err);
                expect(data).to.have.length(1);
                done();
            });
        });

    });

    describe('DAO', function () {

        it('retrieves a single test element', function (done) {
            Dog.test(function (err, data) {
                if(err) return done(err);
                expect(data).to.have.length(1);
                done();
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
