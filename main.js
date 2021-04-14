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

console.log('the solution for exercise 2 part 2:')

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
