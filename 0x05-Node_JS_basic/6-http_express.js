const express = require('express');

const port = 1245;
const app = express();
app.get('/', (req, resp) => {
  resp.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server listening as port  ${port}`);
});

module.exports = app;
