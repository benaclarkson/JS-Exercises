/**
 * Task: Write a loop that logs greeting three times.
**/

let greeting = 'Aloha!';

// Solution 1:
let greetings = 3;

while (greetings > 0) {
  console.log(greeting);
  greetings -= 1;
}

// Solution 2:
for (let g = 3; g > 0; g -= 1) {
  console.log(greeting);
}