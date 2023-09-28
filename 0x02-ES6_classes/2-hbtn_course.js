export default class HolbertonCourse {
  constructor(name, length, students) {
    if (
      typeof name !== 'string'
            || typeof length !== 'number'
            || !Array.isArray(students)
            || (students.every((item) => typeof item === 'string') !== true)
    ) throw new Error('Usage: name(string), length(number), students(an array)');
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
    this._name = name;
  }

  get length() {
    return this._length;
  }

  /**
     * @param {number} length
     */
  set length(length) {
    this._length = length;
  }

  get students() {
    return this._students;
  }

  /**
     * @param {string[]} students
     */
  set students(students) {
    this._students = students;
  }
}
