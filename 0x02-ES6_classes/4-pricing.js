/**
 * Pricing class
 */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // get amount
  get amount() {
    return this._amount;
  }

  /**
     * @param {number} amount
     */
  set amount(value) {
    if (!(typeof value === 'number')) throw new Error('Amount must be a number');
    this._amount = value;
  }

  // get currency
  get currency() {
    return this._currency;
  }

  /**
     * @param {number} currency
     */
  set currency(value) {
    // if (!(value instanceof Currency)) throw new Error('currency must be a number');
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (!(typeof amount === 'number') || !(typeof conversionRate === 'number')) throw new Error('Amount and Conversion Rate must be numbers');
    return amount * conversionRate;
  }
}
