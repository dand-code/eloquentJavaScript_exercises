'use strict';
// WWrite a function min that takes two arguments and returns their minimum.
console.log('the solution for exercise 1:');
function min(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}
console.log(min(0, 10));
//  0
console.log(min(0, -10));
//  -10

//Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean. Test it on 50 and 75. See how it behaves on -1.

console.log('the solution for exercise 2:')

function isEven(number) {
    if (number == 0) return true;
    else if (number == 1) return false;
    else if (number < 0) return isEven(-number);
    else return isEven(number - 2);
}

console.log(isEven(50));
// true
console.log(isEven(75));
// false
console.log(isEven(-1));
// false

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

