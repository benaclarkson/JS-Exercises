/**
 * Task: What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.

 * Solution: The difference between the following code snippets is that the `do...while` loop logs `'Woooot!'` to the console because `do...while` loops always iterate at least once.
**/

// Snippet 1
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// Snippet 2
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);