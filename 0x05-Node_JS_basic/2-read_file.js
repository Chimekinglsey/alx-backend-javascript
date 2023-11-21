const fs = require('fs');

const countStudents = (dbPath) => {
  try {
    const content = fs.readFileSync(dbPath, 'utf-8');
    const lines = content.split('\n');

    const validLines = lines.filter(line => line.trim() !== '');
    const totalStudents = validLines.length - 1;

    const fieldCounts = {
      'SWE': [],
      'CS': []
    };

    if (totalStudents > 0) {
      for (const line of validLines) {
        const fields = line.split(',');
        const field = fields[3] ? fields[3].trim() : '';

        if (field === 'SWE') {
          fieldCounts['SWE'].push(fields[0]);
        } else if (field === 'CS') {
          fieldCounts['CS'].push(fields[0]);
        }
      }

      console.log(`Number of students: ${totalStudents}`);
      for (const field in fieldCounts) {
        const count = fieldCounts[field].length;
        console.log(`Number of students in ${field}: ${count}. List: ${fieldCounts[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
