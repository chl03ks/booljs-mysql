'use strict';

const Bool = require('booljs');

describe('Single connection', function () {
    let model, dao, agent;

    before(async () => {
        const { app, server } = await new Bool('com.example.single', [
            require.resolve('..')
        ]).setBase('example/single')
            .setDatabaseDrivers('booljs.mysql')
            .run();

        model = new app.models.Dog();
        dao = new app.dao.Dog();
        agent = new Agent(server);
    });

    describe('Model', () => it('retrieves a test element', done =>
        model.test((error, data) => {
            if (error !== undefined && error !== null) {
                return done(error);
            }

            expect(data).to.have.length(1);
            done();
        })
    ));

    describe('DAO', () => it('retrieves a test element', done =>
        dao.test((error, data) => {
            if (error !== undefined && error !== null) {
                return done(error);
            }

            expect(data).to.have.length(1);
            done();
        })
    ));

    describe('Controller', () => {
        it('retrieves a single test element', () => expect(agent
            .get('/dog')
            .expect(200)
            .then(response => response.body.data)
        ).to.eventually.have.length(1));
    });
});
