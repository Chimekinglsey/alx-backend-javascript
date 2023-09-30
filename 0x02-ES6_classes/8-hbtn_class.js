export default class HolbertonClass {
  /**
     * Primitive - Holberton Class
     * @param {number} size
     * @param {location} location
     */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getter method for size and location
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Setter methods for size and location
  set size(value) {
    if (typeof value === 'number') this._size = value;
    else throw new TypeError('Size must be a number');
  }

  set location(value) {
    if (typeof value === 'string') this._location = value;
    else throw new TypeError('Location must be a string');
  }

  /**
 * defining the default behavior of Object.prototype.Number
 * [Symbol.toPrimitive] returns different primitive data types based on input
 * it takes a hint that tells the type and then you set what should be returned
 */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') return this._location;
    return this.value;
  }
}
