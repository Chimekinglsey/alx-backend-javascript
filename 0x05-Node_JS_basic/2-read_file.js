const fs = require('fs');

const countStudents = (dbPath) => {
  try {
    const content = fs.readFileSync(dbPath, 'utf-8');
    const lines = content.split('\n');
    const totalStudents = lines.length - 1;
    const CSfield = [];
    const SWEfield = [];
    const f1 = 'SWE';
    const f2 = 'CS';
    if (totalStudents > 0) {
      for (const line of lines) {
        if (!line.endsWith(' ')) {
          const fields = line.split(',');
          const field = fields.length - 1;
          if (fields[field] === f1) SWEfield.push(fields[0]);
          else if (fields[field] === f2) CSfield.push(fields[0]);
        }
      }
      console.log(`Number of students: ${totalStudents}`);
      console.log(`Number of students in ${f2}: ${CSfield.length}. List: ${CSfield.join(', ')}`);
      console.log(`Number of students in ${f1}: ${SWEfield.length}. List: ${SWEfield.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
