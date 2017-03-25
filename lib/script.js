'use strict';

var someData = 1;

function Calculator() {};

Calculator.prototype.add = function () {
    var values = this._filter([].slice.apply(arguments));

    if (values.length < 2) {
        throw new Error('Add expects a minimum of 2 arguments but ' + values.length + ' given.');
    }
    return values.reduce(function (a, b) {
        return a + b;
    });
};