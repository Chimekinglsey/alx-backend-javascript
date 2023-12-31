const fs = require('fs').promises;

const countStudents = (dbPath) => new Promise((resolve, reject) => {
  fs.readFile(dbPath, 'utf-8')
    .then((content) => {
      const lines = content.split('\n');

      const validLines = lines.filter((line) => line.trim() !== '');
      const totalStudents = validLines.length - 1;

      const fieldCounts = {
        CS: [],
        SWE: [],
      };

      if (totalStudents > 0) {
        for (const line of validLines) {
          const fields = line.split(',');
          const field = fields[3] ? fields[3].trim() : '';

          if (field === 'SWE') {
            fieldCounts.SWE.push(fields[0]);
          } else if (field === 'CS') {
            fieldCounts.CS.push(fields[0]);
          }
        }

        console.log(`Number of students: ${totalStudents}`);
        for (const field in fieldCounts) {
          if (field) {
            const count = fieldCounts[field].length;
            console.log(`Number of students in ${field}: ${count}. List: ${fieldCounts[field].join(', ')}`);
          }
        }

        resolve();
      } else {
        reject(new Error('No valid students found in the database'));
      }
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});

module.exports = countStudents;
