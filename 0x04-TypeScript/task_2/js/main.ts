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
const createEmployee = (salary: string | number) => typeof salary === 'number' && salary < 500? "Teacher" : "Director";

// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));

//isDirector Function
function isDirector(employee: any): employee is Director{
  return employee instanceof Director;
}
function executeWork(employee: any){
  if(employee === 'Director'){
    const value = new Director();
    return value.workDirectorTasks()
  }
  else{
    const value = new Teacher();
    return value.workTeacherTasks()
  }
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

//String literal type
type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects) => {
  if (todayClass === 'History')
  return `teaching ${todayClass}`
  if (todayClass === 'Math')
  return`teaching ${todayClass}`
}
console.log(teachClass('Math'));
 