process.stdin.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) console.log(`Your name is: ${name}`);
});
process.on('close', () => {
  console.log('his important software is now closing');
});
