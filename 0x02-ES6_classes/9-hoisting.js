export class HolbertonClass {
  /**
     *
     * @param {number} year
     * @param {string} location
     */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class StudentHolberton {
  /**
     *
     * @param {string} firstName
     * @param {string} lastName
     * @param {HolbertonClass} holbertonClass
     */
  constructor(firstName, lastName, holbertonClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set firstName(value) {
    if (typeof value === 'string') this._firstName = value;
    else throw new TypeError('Name must be a string');
  }

  set lastName(value) {
    if (typeof value === 'string') this._lastName = value;
    else throw new TypeError('Name must be a string');
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  set holbertonClass(value) {
    if (value instanceof HolbertonClass) this._holbertonClass = value;
    else throw TypeError('Holberton must be a class');
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
