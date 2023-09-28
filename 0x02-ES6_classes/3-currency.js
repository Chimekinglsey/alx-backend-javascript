export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // gets the value of code
  get code() {
    return this._code;
  }

  /**
     * @param {string} code
     */
  set code(value) {
    if (!(typeof value === 'string')) throw new Error('Code must be a string');
    this._code = value;
  }

  // returns the value of this._name
  get name() {
    return this._name;
  }

  /**
     * @param {string} name
     */
  set name(value) {
    // if(!(value instanceof String)) throw new Error('Name must be a string')
    if (!(typeof value === 'string')) throw new Error('Name must be a string');
    this._name = value;
  }

  // a method to display curreny code and currency name
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
