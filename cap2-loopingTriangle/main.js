'use strict';
// Write a loop that makes seven calls to console.log to output the following triangle:

console.log('the solution for exercise 1:')
let piece = '';
for (let i = 0; i <= 7; i++) {
    piece += '#';
    console.log(piece);
}

//Write a program that uses console.log to print all the numbers from 1 to 100,, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

console.log('the solution for exercise 2 part 1:')

let counter = 0;
for (let i = 0; i <= 100; i++) {
    counter += 1;
    if (counter % 3 == 0) {
        console.log('Fizz', `(${counter})`);
    } else if (counter % 5 == 0 && !counter % 3 == 0) {
        console.log('Buzz', `(${counter})`);
    } else {
        console.log(counter);
    }
}

//When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

console.log('the solution for exercise 2 part 2:');

let counter2 = 0;

for (let i = 0; i <= 100; i++) {
    counter2 += 1;
    if (counter2 % 3 == 0 && counter2 % 5 == 0) {
        console.log('FizzBuzz', `(${counter2})`);
    } else if (counter2 % 3 == 0) {
        console.log('Fizz', `(${counter2})`);
    } else if (counter2 % 5 == 0) {
        console.log('Buzz', `(${counter2})`);
    } else {
        console.log(counter2);
    }
}

//Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

console.log('the solution for exercise 3:');
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);

// let row = '';
// for (let i = 1; i <= 8; i++) {
//     if (i % 2 == 0) {
//         row = ' # # # #';
//         console.log(row);
//     } else {
//         row = '# # # #';
//         console.log(row);
//     }
// }

