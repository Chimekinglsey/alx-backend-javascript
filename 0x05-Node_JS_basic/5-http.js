const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = async (dataPath) => {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    const fileLines = data.trim().split('\n');

    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      studentGroups[field] = studentGroups[field] || [];
      const studentEntries = studentPropNames.map((propName, idx) => ({
        [propName]: studentPropValues[idx],
      }));
      studentGroups[field].push(Object.assign({}, ...studentEntries));
    }

    const totalStudents = Object.values(studentGroups).flat().length;
    const reportParts = [`Number of students: ${totalStudents}`];

    for (const [field, group] of Object.entries(studentGroups)) {
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
      const responseParts = ['This is the list of our students'];

      try {
        const report = await countStudents(DB_FILE);
        responseParts.push(report);
      } catch (error) {
        responseParts.push(error instanceof Error ? error.message : error.toString());
      } finally {
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.end(Buffer.from(responseText));
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
