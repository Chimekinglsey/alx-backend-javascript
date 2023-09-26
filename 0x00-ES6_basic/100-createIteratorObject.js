export default function createIteratorObject(report) {
  const allEmployees = [];
  if (report) {
    for (const depts of report) {
      if (depts) {
        for (const person of depts) allEmployees.push(person);
      }
    }
  }
  return allEmployees;
}
