const calculateNumber = require('./1-calcul')
const assert = require('assert')

describe('CalculateNumber', function(){
    it('Should return the round of two numbers summed', function () {
        assert.equal(calculateNumber('SUM', 20.5, 10.3), 31);
        assert.equal(calculateNumber("SUM", 12.2, 3.7), 16)
        assert.equal(calculateNumber("SUM", 0.6, 3), 4)
    });

    it('Should return the rounded difference of two numbers', function (){
        assert.equal(calculateNumber("SUBTRACT", -0.6, 3), -4)
        assert.equal(calculateNumber("SUBTRACT", 20.0, -10), 30)
        assert.equal(calculateNumber("SUBTRACT", -1.6, 3.7), -6)
    });

    it('Should return the rounded "DIVISION" of two numbers', function (){
        assert.equal(calculateNumber("DIVIDE", 1, 3.7), 0.25)
        assert.equal(calculateNumber("DIVIDE", 10, 2), 5)
        assert.equal(calculateNumber("DIVIDE", 10, 0), 'Error')
    });
})