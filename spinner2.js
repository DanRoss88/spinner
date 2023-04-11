/*
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900); */
const chars = ['|', '/', '-', '\\', '|',];
let interval = 100;
for(const char of chars) {
interval += 200;
  setTimeout(() => {
  process.stdout.write(`\r${char}`);}, interval);
}