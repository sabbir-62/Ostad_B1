function addNumber(){
   let sum = 0;
   for(let i=0; i<arguments.length; i++){
    sum += arguments[i]
   }
   return sum;
}
console.log(addNumber(2,4,5))
console.log(addNumber(10,45,34,130))