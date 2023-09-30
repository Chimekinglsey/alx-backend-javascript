export default class Car {
  /**
     *
     * @param {string} brand
     * @param {string} motor
     * @param {string} color
     */
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // getter method for brand
  get brand() {
    return this._brand;
  }

  // setter method for brand
  set brand(value) {
    this._brand = value;
  }

  // getter method for motor
  get motor() {
    return this._motor;
  }

  // setter method for motor
  set motor(value) {
    this._motor = value;
  }

  // getter method for color

  get color() {
    return this._color;
  }

  // setter method for color
  set color(value) {
    this._color = value;
  }

  // Define [Symbol.species] to return the same class
  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    // Create a new instance of the same class with no properties
    //     const clone = Object.create(Object.getPrototypeOf(this))
    //     return Object.assign(clone,this)
    //     return new this.constructor(this.brand, this.motor, this.color);
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
