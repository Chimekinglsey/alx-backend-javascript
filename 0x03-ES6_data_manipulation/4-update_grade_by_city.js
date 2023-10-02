export default function updateStudentGradeByCity(students, city, grades) {
  // Check if students and grades are valid arrays
  if (!Array.isArray(students) || !Array.isArray(grades)) {
    return [];
  }

  // Create an array to store students in the specified city with their updated grades
  const updatedStudents = students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the matching grade for the student
      const matchingGrade = grades.find((grade) => grade.studentId === student.id);

      // Determine the grade value, setting to 'N/A' if not found or invalid
      const gradeValue = matchingGrade && typeof matchingGrade.grade === 'number'
        ? matchingGrade.grade
        : 'N/A';

      // Create a new object with the desired properties
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: gradeValue,
      };
    });

  return updatedStudents;
}
// export default function updateStudentGradeByCity(students, city, grades) {
//     if (!Array.isArray(students) || !Array.isArray(grades)) return [];
//     const listCityStudents = [];
//     // filter students by city
// const studentsInCity = students.filter((student) => (student.location === city ? student : null))
//     // for each student, find their grade in the grades array using the student.id

//       [...studentsInCity].map((student) => {
//         const matchingGrade = grades.find((grade) => grade.studentId === student.id);
//         if (matchingGrade) {
//           student.grade = matchingGrade.grade;
//         } else {
//         // no grade associated with student, set it manually
//         // + without affecting original grade
//           student.grade = 'N/A';
//         }
//         // collate student data and append it to list
//         const studentData = {
//           id: student.id,
//           firstName: student.firstName,
//           location: student.location,
//           grade: student.grade,
//         };
//          listCityStudents.push(studentData)

//       })

//       return listCityStudents;
//       // return the list
//     }
