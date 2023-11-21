const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const host = 'localhost';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Assuming you pass the student database path as the second argument
    const dbPath = process.argv[2];

    countStudents(dbPath)
      .then((result) => {
        // At this point, the asynchronous operation is complete
        res.write(result);
        res.end(); // End the response here; the details were already written
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Error: ${error.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
