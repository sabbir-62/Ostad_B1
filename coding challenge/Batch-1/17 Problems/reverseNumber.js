let reverseNumber = (number) => {
    let sum = 0, rem;
    while(number > 0){
        rem = number % 10;
        sum = sum * 10 + rem;
        number = parseInt(number / 10);
    }
    return sum;
}
console.log(reverseNumber(123));
console.log(reverseNumber(5872));