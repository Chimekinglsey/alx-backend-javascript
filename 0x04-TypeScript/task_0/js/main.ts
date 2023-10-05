interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
  firstName: 'John',
  lastName: 'GoodMan',
  age: 20,
  location: 'Lagos',
};
const student2: Student = {
  firstName: 'James',
  lastName: 'Israel',
  age: 20,
  location: 'Enugu',
};
const studentsList = [student1, student2];
studentsList.forEach((student) => console.log(`${student.firstName} ${student.lastName}`));
