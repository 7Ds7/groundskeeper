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
            assert.equal(cleaner.toString(), clean);
        },
        'For Loop': function () {
            var file = fixture('edges/for-loops'),
                clean = fixture('edges/for-loops.clean'),
                cleaner = groundskeeper();

            cleaner.write(file);
            assert.equal(clean, cleaner.toString());
        },
        'While Loop': function () {},
        'Do-While Loop': function () {}

    },

    'Unary Expression': function () {
        var cleaner = groundskeeper();

        cleaner.write('typeof console !== \'undefined\'');
        console.log(cleaner.toString())
    }
};
