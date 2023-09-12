let factorialNumber = (number) => {
    if (number == 1) {
        return 1;
    }
    return number * factorialNumber(number - 1);
}
console.log(factorialNumber(12));