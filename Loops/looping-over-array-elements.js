/**
 * Task: Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.
**/

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

// Further Exploration: If the array was empty, the code above would not log anything to the console since the first iteration of the while loop would evaluate to false because the length of the array is 0.