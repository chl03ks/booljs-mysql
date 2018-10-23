'use strict';

const Bool = require('booljs');

describe('Single connection', function () {
    let model;

    before(async () => {
        const { app } = await new Bool('com.example.single', [
            require.resolve('..')
        ]).setBase('example/single')
            .setDatabaseDrivers('booljs.mysql')
            .run();

        model = new app.models.Dog();
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
});
