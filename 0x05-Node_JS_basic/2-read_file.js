const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the file into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Calculate the total number of students
    const totalStudents = lines.length - 1; // Subtract 1 to exclude the header line

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Extract and count students in each field
    const fieldCounts = {};

    for (let i = 1; i < lines.length; i++) { // Start from index 1 to skip the header line
      const fields = lines[i].split(',');
      const field = fields[3].trim(); // Assuming the field is in the fourth column

      if (fieldCounts[field]) {
        fieldCounts[field]++;
      } else {
        fieldCounts[field] = 1;
      }
    }

    // Log the number of students in each field
    for (const field in fieldCounts) {
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${getFirstNamesList(lines, field)}`);
    }
  } catch (error) {
    // Log an error message if the database is not available
    console.error('Cannot load the database');
  }
}
function getFirstNamesList(lines, field) {
  const firstNamesList = [];

  for (let i = 1; i < lines.length; i++) { // Start from index 1 to skip the header line
    const fields = lines[i].split(',');
    const currentField = fields[3].trim(); // Assuming the field is in the fourth column

    if (currentField === field) {
      firstNamesList.push(fields[0].trim()); // Assuming the first name is in the first column
    }
  }

  return firstNamesList.join(', ');
}

module.exports = countStudents;
