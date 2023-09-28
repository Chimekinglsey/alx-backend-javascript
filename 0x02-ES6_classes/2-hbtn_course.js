export default class HolbertonCourse {
  constructor(name, length, students) {
    // ==========================================================================================
    // the commented block worked but last check is failing, lets try it per setter method
    // ==========================================================================================
    // if (
    //   typeof name !== 'string'
    //         || typeof length !== 'number'
    //         || !Array.isArray(students)
    //         || (students.every((item) => typeof item === 'string') !== true)
    // ) throw new Error('Usage: name(string), length(number), students(an array)');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  /**
     * @param {string} name
     */
  set name(name) {
    if (typeof name !== 'string') throw new TypeError(`${name} is not a string`);
    this._name = name;
  }

  get length() {
    return this._length;
  }

  /**
     * @param {number} length
     */
  set length(length) {
    if (typeof length !== 'number') throw new TypeError(`${length} is not a valid number`);
    this._length = length;
  }

  get students() {
    return this._students;
  }

  /**
     * @param {string[]} students
     */
  set students(students) {
    if (!Array.isArray(students)) throw new TypeError(`${students} must be an array`);
    else if (students.every((student) => typeof student !== 'string')) throw new TypeError('All  entries in the array must be a string type');

    this._students = students;
  }
}
