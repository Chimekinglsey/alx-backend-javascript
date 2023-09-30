import Car from './10-car';

export default class EVCar extends Car {
  /**
     *
     * @param {string} brand
     * @param {string} motor
     * @param {string} color
     * @param {string} range
     */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  // get method for range
  get range() {
    return this._range;
  }

  // setter method
  set range(value) {
    this._range = value;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
