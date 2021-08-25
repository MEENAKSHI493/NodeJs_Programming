const prompt = require("prompt-sync")({ sigint: true });
//With readline

let a=parseInt(prompt('Enter the first number::'));
let b=parseInt(prompt('Enter the Second number::'));;
let c=a+b;
console.log("addition of two::" +c);

let s1=prompt('Enter the first number::');
let s2=prompt('Enter the second number::');
let s3=s1+s2;
console.log("String Addition ::"+s3);

let d=new Date();
let today="Today is:"+(d.getMonth+1)+"/"+d.getFullYear();
console.log(today);