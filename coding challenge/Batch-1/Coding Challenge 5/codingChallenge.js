
let numbers = [33,25,51,96,48,12,84];



//01. find small number
let smallNumber = Math.min(...numbers);
console.log(`The smallest number is = ${smallNumber}`);


//02. find small number among 3 number
console.log(`The smallest number is = ${Math.min(26,34,20)}`);


//03. make a function to calculate average value
let calculateAvg = (numbers) =>
    numbers.reduce((a,b) => a + b, 0) / numbers.length;
console.log(`The average of numbers is = ${calculateAvg(numbers).toFixed(2)}`);


//04. Calculate the area of a rectangle
let calculateArea = (height, width) => height * width;
console.log(`The area of the rectangle is = ${calculateArea(12,6)}`);


//05. Find second large number
let sortedNumbers = numbers.sort((a,b) => b-a);
console.log(`The second largest number is = ${sortedNumbers[1]}`);