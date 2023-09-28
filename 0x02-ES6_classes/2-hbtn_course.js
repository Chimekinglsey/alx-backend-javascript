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
  set name(Name) {
    if (typeof Name !== 'string') throw new TypeError(`${Name} is not a string`);
    this._name = Name;
  }

  get length() {
    return this._length;
  }

  /**
     * @param {number} length
     */
  set length(Lenght) {
    if (typeof Lenght !== 'number') throw new TypeError(`${Lenght} is not a valid number`);
    this._length = Lenght;
  }

  get students() {
    return this._students;
  }

  /**
     * @param {string[]} students
     */
  set students(Students) {
    if (!Array.isArray(Students)) throw new TypeError(`${Students} must be an array`);
    else if (Students.every((student) => typeof student !== 'string')) throw new TypeError('All  entries in the array must be a string type');

    this._students = Students;
  }
}
