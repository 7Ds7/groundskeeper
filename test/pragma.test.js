/**
 * Module dependencies.
 */

var groundskeeper = require('../'),
    assert = require('assert'),
    fs = require('fs'),
    fixture = function (name) {
        return fs.readFileSync(__dirname + '/fixtures/' + name + '.js', 'utf8');
    };

module.exports.Pragmas = {
    'remove pragmas': function () {
        var file = fixture('pragmas/pragmas'),
            clean = fixture('pragmas/pragmas.clean'),
            cleaner = groundskeeper({
                console: true,
                'debugger': true
            });

        cleaner.write(file);
        assert.equal(clean, cleaner.toString());
    },

    'remove validation pragma only': function () {
        var file = fixture('pragmas/validation'),
            clean = fixture('pragmas/validation.clean'),
            cleaner = groundskeeper({
                console: true,
                'debugger': true,
                pragmas: ['development']
            });

        cleaner.write(file);
        assert.equal(cleaner.toString(), clean);
    },

    'remove development pragma only': function () {
        var file = fixture('pragmas/development'),
            clean = fixture('pragmas/development.clean'),
            cleaner = groundskeeper({
                console: true,
                'debugger': true,
                pragmas: ['validation']
            });

        cleaner.write(file);
        assert.equal(cleaner.toString(), clean);
    }
};
