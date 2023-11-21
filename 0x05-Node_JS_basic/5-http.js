const student = process.argv[3];
const http = require('http');
const fs = require('fs');

const port = 1245;
const host = 'localhost';

const app = http.createServer((req, resp) => {
  if (req.url === '/') {
    resp.writeHead(200, { 'Content-Type': 'text/plain' });
    resp.write('Hello Holberton School!');
    resp.end();
  } else if (req.url === '/students') {
    resp.writeHead(200, { 'Content-Type': 'text/plain' });
    
    const countStudents = require('./3-read_file_async');
    
    const dbPath = process.argv[2];

    countStudents(dbPath)
      .then(() => {
        resp.write('This is the list of our students\n');
        resp.write(`${student}`);
        resp.end();
      })
      .catch((error) => {
        resp.writeHead(500, { 'Content-Type': 'text/plain' });
        resp.write(`Error: ${error.message}`);
        resp.end();
      });
  } else {
    resp.writeHead(404, { 'Content-Type': 'text/plain' });
    resp.write('Not Found');
    resp.end();
  }
});

app.listen(port, host);

module.exports = app;
