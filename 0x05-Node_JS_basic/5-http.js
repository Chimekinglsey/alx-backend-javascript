const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = async (dataPath) => {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    const fileLines = data.trim().split('\n');

    const studentCourses = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      studentCourses[field] = studentCourses[field] || [];
      const studentEntries = studentNames.map((propName, idx) => ({
        [propName]: studentPropValues[idx],
      }));
      studentCourses[field].push(Object.assign({}, ...studentEntries));
    }

    const totalStudents = Object.values(studentCourses).flat().length;
    const reportParts = [`Number of students: ${totalStudents}`];

    for (const [field, group] of Object.entries(studentCourses)) {
      reportParts.push(`Number of students in ${field}: ${group.length}.`);
      reportParts.push(`List: ${group.map((student) => student.firstname).join(', ')}`);
    }

    return reportParts.join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer((req, res) => {
  const routeHandlers = {
    '/': async () => {
      const responseText = 'Hello Holberton School!';
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(responseText);
    },
    '/students': async () => {
      try {
        const report = await countStudents(DB_FILE);
        const responseText = `This is the list of our students\n${report}`;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(responseText);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : error.toString();
        const responseText = `This is the list of our students\n${errorMessage}`;
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(responseText);
      }
    },
  };

  const handler = routeHandlers[req.url] || (() => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  });

  handler();
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
