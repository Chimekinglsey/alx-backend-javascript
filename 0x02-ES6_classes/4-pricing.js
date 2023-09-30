import Currency from './3-currency';
/**
 * Pricing class for representing an amount with a specific currency.
 * @param {number} amount - The amount value.
 * @param {Currency} currency - An instance of the Currency class
 * currency takes 2 arguments - currency.code and currency.name
 */

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter method for retrieving amount
  get amount() {
    return this._amount;
  }

  // Setter method for amount
  set amount(value) {
    if (typeof value === 'number') this._amount = value;
    else throw new Error('Amount must be a number without comma');
  }

  // getter method for currency
  get currency() {
    return this._currency;
  }

  // setter method for currency
  set currency(value) {
    if (value instanceof Currency) this._currency = value;
  }

  // method to calculate full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') return amount * conversionRate;
    throw new TypeError('Both Amount and conversionRate must be numbers');
  }
}
