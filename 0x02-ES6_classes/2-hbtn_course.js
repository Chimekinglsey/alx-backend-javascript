/*
* this file contains a class for creating HolbertonCourse
*/
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter method for name
  get name() {
    return this._name;
  }

  /**
     * @param {string} name
     */
  set name(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
    this._name = value;
  }

  // getter method for lenght
  get length() {
    return this._length;
  }

  /**
     * @param {number} length
     */
  set length(value) {
    if (typeof value !== 'number') throw new TypeError('Length must be a number');
    this._length = value;
  }

  // getter for students array
  get students() {
    return this._students;
  }

  /**
   * @param {string[]} students
     */
  set students(value) {
    if (!Array.isArray(value)) throw new TypeError('students must be an array');
    if (value.every((student) => typeof student !== 'string')) throw new TypeError('All  entries in the array must be a string');
    else this._students = value;
  }
}

// ==========================================================================================
// the commented block worked but last check is failing, lets try it per setter method
// ==========================================================================================
// if (
//   typeof name !== 'string'
//         || typeof length !== 'number'
//         || !Array.isArray(students)
//         || (students.every((item) => typeof item === 'string') !== true)
// ) throw new Error('Usage: name(string), length(number), students(an array)');
