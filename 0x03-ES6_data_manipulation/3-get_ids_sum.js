const getStudentIdsSum = (students) => {
  if (!Array.isArray(students)) return [];
  return students.reduce((acc, currVal) => acc + currVal.id, 0);
};
export default getStudentIdsSum;
