//Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

//Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

//Director Class
class Director implements DirectorInterface {
  constructor() {}
  workFromHome(): string {
    return "Working from home"
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break"
  }
  workDirectorTasks(): string {
    return "Getting to director tasks"
  }
}

class Teacher implements TeacherInterface {
  constructor() {}
  workFromHome = () : string => "Cannot work from home"
  getCoffeeBreak = () : string => "Cannot have a break"
  workTeacherTasks = () :string => "Getting to work"
}
const createEmployee = (salary: string | number) => typeof salary === 'number' && salary < 500? console.log("Teacher"): console.log("Director");
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
