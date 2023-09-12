let num = [2,9,15]
let squareNumber = (number) => Math.pow(number,2);
for(let i of num){
    let result = squareNumber(i)
    console.log("Square of", i, "=", result);
}
