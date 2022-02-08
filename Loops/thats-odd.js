/**
 * Task: Write a while loop that logs all odd natural numbers between 1 and 40.
**/

let num = 1;

while (num < 41) {
  if (num % 2 === 1) console.log(num);
  num += 1;
}