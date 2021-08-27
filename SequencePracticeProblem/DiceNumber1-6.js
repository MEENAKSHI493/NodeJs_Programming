//problem-02 Random  number to get dice number between 1 to 6 using math.random function

let diceNumber = Math.floor(Math.random() * (6 - 1)) + 1;
console.log("Generating dice numbers between 1 to 6 : " + diceNumber);