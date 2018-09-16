'use strict';

const Bool = require('booljs');

describe('Pooled connection', function () {
    let model, dao, agent;

    before(async () => {
        const { app, server } = await new Bool('com.example.pooled', [
            require.resolve('..')
        ]).setBase('example/pooled')
            .setDatabaseDrivers('booljs.mysql')
            .run();

        model = new app.models.Dog();
        dao = new app.dao.Dog();
        agent = new Agent(server);
    });

    describe('Model', () => it('retrieves a test element', () =>
        expect(model.test()).to.eventually.have.length(1)
    ));

    describe('DAO', () => it('retrieves a test element', () =>
        expect(dao.test()).to.eventually.have.length(1)
    ));

    describe('Controller', () => {
        it('retrieves a single test element', () => expect(agent
            .get('/dog')
            .expect(200)
            .then(response => response.body.data)
        ).to.eventually.have.length(1));
    });
});
