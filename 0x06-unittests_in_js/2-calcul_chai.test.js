const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('cALCULATE NUMBERS', () => {
  describe('sUM', () => {
    it('should return the rounded "SUM" of two numbers', () => {
      expect(calculateNumber('SUM', 20.5, 10.3), 'Rounded sum of two positive ints').to.equal(31);
      expect(calculateNumber('SUM', 12.2, 3.7), 'Rounded sum of two positive ints').to.equal(16);
      expect(calculateNumber('SUM', 0.6, 3), 'Rounded sum of two positive ints').to.equal(4);
    });
  });

  describe('sUBTRACT', () => {
    it('should return the rounded "DIFFERENCE" of two numbers', () => {
      expect(calculateNumber('SUBTRACT', -0.6, 3), 'Rounded diff of +ve and -ve ints').to.equal(-4);
      expect(calculateNumber('SUBTRACT', 20.0, -10), 'Rounded diff of +ve and -ve ints').to.equal(30);
      expect(calculateNumber('SUBTRACT', -1.6, 3.7), 'Rounded diff of +ve and -ve ints').to.equal(-6);
    });
  });

  describe('dIVIDE', () => {
    it('should return the rounded "DIVISION" of two numbers', () => {
      expect(calculateNumber('DIVIDE', 1, 3.7), 'Rounded division of +ve integers').to.equal(0.25);
      expect(calculateNumber('DIVIDE', 10, 2), 'Rounded division of +ve integers').to.equal(5);
      expect(calculateNumber('DIVIDE', 10, 0), 'Rounded division by zero').to.be.a('string');
    });
  });
});
