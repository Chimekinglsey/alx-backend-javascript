interface Teacher{
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee?: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const teacher4: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  referal: teacher3,
};
// console.log(teacher4);
// console.log(teacher3);

// Interface Inheritance: Directors should extend Teacher interface
interface Directors extends Teacher{
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'John',
  doesnt_look_bad: true,
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
}
// console.log(director1);

// A function that prints Teacher info
const printTeacher = (firstName: string, lastName: string) => {
  return`${firstName[0]}. ${lastName}`
  // return `${firstName.slice(0,1)}. ${lastName}`
}
console.log(printTeacher("John", "Doe"));
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const teacher: printTeacherFunction = printTeacher;
console.log(teacher("John", "Doe")); // Output: J. Doe

/**
 * STUDENT CLASS
 */
class StudentClass{
  firstName: string;
  lastName: string;
  constructor (firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = () => "Currently working";
  displayName() {
    return this.firstName;
  }
} 
const student1 = new StudentClass("James", "Willis")
  console.log(student1.displayName());
  