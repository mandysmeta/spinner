process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\rl  ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 3000);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 5000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 7000);
// ... fill in the rest yourself ...

setTimeout(() => {
  process.stdout.write('\rl   ');
}, 9000);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 11000);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 13000);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 15000);

setTimeout(() => {
  process.stdout.write('\rl   ');
}, 17000);
