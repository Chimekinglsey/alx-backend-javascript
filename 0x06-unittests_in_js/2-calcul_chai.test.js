const calculateNumber = require('./1-calcul')
const expect = require('chai').expect

describe('CalculateNumber', function(){
    it('Should return the round of two numbers summed', function () {
        expect(calculateNumber('SUM', 20.5, 10.3)).to.equal(31);
        expect(calculateNumber("SUM", 12.2, 3.7)).to.equal(16)
        expect(calculateNumber("SUM", 0.6, 3)).to.equal(4)
    });

    it('Should return the rounded difference of two numbers', function (){
        expect(calculateNumber("SUBTRACT", -0.6, 3)).to.equal(-4)
        expect(calculateNumber("SUBTRACT", 20.0, -10)).to.equal(30)
        expect(calculateNumber("SUBTRACT", -1.6, 3.7)).to.equal(-6)
    });

    it('Should return the rounded "DIVISION" of two numbers', function (){
        expect(calculateNumber("DIVIDE", 1, 3.7)).to.equal(0.25)
        expect(calculateNumber("DIVIDE", 10, 2)).to.equal(5)
        expect(calculateNumber("DIVIDE", 10, 0)).to.equal('Error')
    });
})