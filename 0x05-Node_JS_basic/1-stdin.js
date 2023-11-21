const { spawn } = require('child_process');

const ls = spawn('cat');

console.log('Welcome to Holberton School, what is your name?');
// isTTY helps to ensure that the data is coming from keyboard directly
if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);
  });
// This will run when data is entered as prompt, like cat or echo
} else {
  let pipedInput = '';
  process.stdin.on('data', (input) => {
    pipedInput += input;
  });

  process.stdin.on('end', () => {
    const name = pipedInput.trim();
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
    process.exit(0);
  });
}

ls.on('exit', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
