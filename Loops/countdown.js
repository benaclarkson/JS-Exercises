/**
 * Task: The code below logs the numbers from 1 to 10. Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'.
**/

for (let i = 1; i <= 10; i += 1) {
  console.log(i);
}

// Solution 1:
for (let i = 10; i >= 0; i -= 1) {
  i >= 1 ? console.log(i) : console.log('Launch!');
}

// Solution 2:
for (let e = 10; e > 0; e -= 1) {
  console.log(e);
}

console.log('Launch!');

// Solution 3:
let i = 10;

do {
  if (i > 0) {
    console.log(i);
  } else {
    console.log('Launch!');
  }

  i -= 1
} while (i >= 0)

// Solution 4:
let count = 10;

while (count >= 0) {
  count > 0 ? console.log(count) : console.log('Launch!');
  count -= 1;
}

// Solution 5:
let counter = 10;

while (counter >= 0) {
  switch (counter) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      console.log(counter);
      break;
    case 0:
      console.log('Launch!');
      break;
    default:
      break;
  }
  counter -= 1
}