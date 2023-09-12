//Calculate the area of a triangle
let triangleArea = (a,b,c) => {
    let s = (a + b + c) / 2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}
console.log(`The area of a triangle is : ${triangleArea(4,5,6).toFixed(2)}`);



//Find Prime number
let findPrimeNumber = (number) => {
    let isPrime = true;

    if(number <= 1){
        console.log(`${number} is not a prime number`);
    }
    else{
         for(let i = 2; i < number; i++){
            if(number % i == 0){
                isPrime = false;
            break;
            }
        }
        if(isPrime)
            console.log(`${number} is a prime number`);
        else{
            console.log(`${number} is not a prime number`);
        }
    }
}
findPrimeNumber(91);