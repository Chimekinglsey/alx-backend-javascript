const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const dbPath = process.argv[2];

      const countStudents = async () => {
        const content = await fs.readFile(dbPath, 'utf-8');
        const lines = content.trim().split('\n');

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

          return { totalStudents, fieldCounts };
        }
        throw new Error('No valid students found in the database');
      };

      const { totalStudents, fieldCounts } = await countStudents();
      const responseParts = [
        'This is the list of our students',
        `Number of students: ${totalStudents}`,
        `Number of students in CS: ${fieldCounts.CS.length}. List: ${fieldCounts.CS.join(', ')}`,
        `Number of students in SWE: ${fieldCounts.SWE.length}. List: ${fieldCounts.SWE.join(', ')}`,
      ];
      const response = responseParts.join('\n');
      res.end(response);
    } catch (error) {
      res.end(`Error: ${error.message}`);
    }
  } else {
    res.end('404 Not Found');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
