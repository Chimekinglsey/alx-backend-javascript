import Building from './5-building';
/**
 * SkyHighBuilding: a class that builds on the Building class
 * @param {Building} sqft
 * @param {number} floors
 */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // getter method for floors; since Building has encapsulated sqft, we won't redo it
  get floors() {
    return this._floors;
  }

  // Setter method to encapsulate floors
  set floors(value) {
    if (typeof value === 'number') this._floors = value;
    else throw new TypeError('Floors must be a number');
  }

  evacuationWarningMessage() {
    this.message = 'Evacuate slowly the NUMBER_OF_FLOORS floors';
    return this.message;
  }
}
