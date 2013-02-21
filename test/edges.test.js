/**
 * Module dependencies.
 */

var groundskeeper = require('../'),
    assert = require('assert'),
    fs = require('fs'),
    fixture = function (name) {
        return fs.readFileSync(__dirname + '/fixtures/' + name + '.js', 'utf8');
    };

module.exports.Edges = {
    'Bracketless Control-Flow': {
        'If statements' : function () {
            var file = fixture('edges/conditional_expressions'),
                clean = fixture('edges/conditional_expressions.clean'),
                cleaner = groundskeeper();

            cleaner.write(file);
            assert.equal(clean, cleaner.toString());
        },
        'For Loop': function () {},
        'While Loop': function () {},
        'Do-While Loop': function () {}

    },

    'Coma operator': function () {

    }
};
