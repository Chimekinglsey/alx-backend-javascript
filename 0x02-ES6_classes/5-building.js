/**
 * Building:
 * @param {number} sqft
 */

export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    // Check if the child class has implemented the method
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter method to retrieve the value of sqft
  get sqft() {
    return this._sqft;
  }

  // Setter method that assigns value to sqft
  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('SQFT must be a number');
    }
  }

  // A method that child classes are expected to override
}
