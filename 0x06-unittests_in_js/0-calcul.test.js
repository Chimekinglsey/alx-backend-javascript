const calculateNumber = require('./0-calcul')
const assert = require('chai').assert

describe('Calc', function() {
    describe('calculateNumber', function(){
        it('Should return the rounded sum of two numbers', function (){
            assert.equal(calculateNumber(20.5, 10.3), 31, 'round(20.5) and round(10.3) is 31');
            assert.equal(calculateNumber(20.4, 10.3), 30, 'round(20.5) and round(10.3) is 31')
            assert.equal(calculateNumber(20.0, 10), 30, 'round(20.5) and round(10.3) is 31')
            assert.isNumber(calculateNumber(10, 0))

        });
        it('Should return the rounded sum of two numbers', function (){
            assert.equal(calculateNumber(20.0, 10), 30, 'round(20.5) and round(10.3) is 31')
            assert.isNumber(calculateNumber(10, 0))

        });
    })
})