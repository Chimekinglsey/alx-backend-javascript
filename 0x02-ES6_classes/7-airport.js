export default class Airport {
  /**
     *
     * @param {String} name
     * @param {String} code
     */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Getter method to retrieve Airport.name
  get name() {
    return this._name;
  }

  // Setter method to encapsulate Airport.name
  set name(value) {
    if (typeof value === 'string') this._name = value;
    else throw new TypeError('Name is expected to be a string');
  }

  // Getter method to retrieve Airport.code
  get code() {
    return this._code;
  }

  // Setter method to encapsulate Airport.code
  set code(value) {
    if (typeof value === 'string') this._code = value;
    else throw new TypeError('Code is expected to be a string');
  }

  // changing the default behaviour of Airport.toString() using[Symbol.toStringTag]
  // this Object.prototype.toString(). Creating a toString() method won't affect the obj prototype

  get [Symbol.toStringTag] (){
    return `${this._code}`;
  }
}
