'use strict';

module.exports = {
    extends: [ 'standard' ],
    env: {
        es6: true,
        node: true,
        mocha: true
    },
    rules: {
        indent: [ 'error', 4 ],
        semi: [ 'error', 'always' ],
        'no-multi-spaces': 0
    },
    globals: {
        Agent: true,
        expect: true
    }
};
