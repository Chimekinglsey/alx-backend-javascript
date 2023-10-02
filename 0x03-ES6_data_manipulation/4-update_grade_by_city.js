export default function updateStudentGradeByCity(students, city, grades) {
  if (!Array.isArray(students) || !Array.isArray(grades)) return [];
  const listCityStudents = [];
  // filter students by city
  const studentsInCity = students.filter((student) => (student.location === city ? student : null));
  // for each student, find their grade in the grades array using the student.id
  listCityStudents.push(
    ...studentsInCity.map((student) => {
      const matchingGrade = grades.find((grade) => grade.studentId === student.id);
      if (matchingGrade) {
        student.grade = matchingGrade.grade;
      } else {
      // no grade associated with student, set it manually
      // + without affecting original grade
        student.grade = 'N/A';
      }
      // collate student data and append it to list
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: student.grade,
      };
    }),
  );
  // return the list
  return listCityStudents;
}
