process.stdout.write('hello from spinner1.js... \rheyyy\n');
//remove repeated settimeouts

//increasing timeout - loop, character & timeout
let charList = "l/-\\";
let charPosition = 0;

for (let i = 100; i <= 1700; i += 200) {
  //setTimeout needs a callback and a number for delay - (callback, #delay)
  setTimeout(function() {
    const char = charList[charPosition % 4];
    //console.log(i)
    charPosition++;
    process.stdout.write(`\r${char}`);
  },
  i);
}


// setTimeout(() => {
//   process.stdout.write('\rl  ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\rl   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\rl   ');
// }, 1700);