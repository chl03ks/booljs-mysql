'use strict';

const Bool = require('booljs');

describe('Pooled connection', function () {
    let model;

    before(async () => {
        const { app } = await new Bool('com.example.pooled', [
            require.resolve('..')
        ]).setBase('example/pooled')
            .setDatabaseDrivers('booljs.mysql')
            .run();

        model = new app.models.Dog();
    });

    describe('Model', () => it('retrieves a test element', () =>
        expect(model.test()).to.eventually.have.length(1)
    ));
});
