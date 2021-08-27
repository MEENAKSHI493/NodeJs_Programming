//Problem :4 Program to reads random five random  2 digit values, find their sum and average.

let FirstTwoDigit = Math.floor(Math.random() * (80- 15)) + 10;
let SecondTwoDigit = Math.floor(Math.random() * (80 - 15)) + 10;
let ThirdTwoDigit = Math.floor(Math.random() * (80 - 15)) + 10;
let ForthTwoDigit = Math.floor(Math.random() * (80 - 15)) + 10;
let FifthTwoDigit = Math.floor(Math.random() * (80 - 15)) + 10;

let sum = FirstTwoDigit + SecondTwoDigit + ThirdTwoDigit + ForthTwoDigit + FirstTwoDigit;
let Avg = sum / 5;

console.log("Sum of five two digit random numbers is : " + sum);
console.log("Avgis : " + Avg);