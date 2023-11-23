const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calc', () => {
  describe('calculateNumber', () => {
    it('should return the rounded sum of two numbers', () => {
      assert.equal(calculateNumber(20.5, 10.3), 31);
      assert.equal(calculateNumber(12.2, 3.7), 16);
      assert.equal(calculateNumber(0.6, 3), 4);
    });
    it('should return the rounded sum of two numbers', () => {
      assert.equal(calculateNumber(-0.6, 3), 2);
      assert.equal(calculateNumber(20.0, -10), 10);
      assert.equal(calculateNumber(-1.6, 3.7), 2);
    });
    it('should return the rounded sum of two numbers', () => {
      assert.equal(calculateNumber(1, 3.7), 5);
      assert.equal(calculateNumber(1.1, 2.95), 4);
    });
    it('should return the rounded sum of two numbers', () => {
      assert.equal(calculateNumber(0, -0.7), -1);
      assert.equal(calculateNumber(20.0, 10), 30);
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
});
