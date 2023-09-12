let palindrome = (str) => {
   let length = str.length;
   let mid = Math.floor(length/2);

   for(let i=0; i<mid; i++){
    if(str[i] !== str[length -i -1]){
        return false;
    }
   }
   return true;
}
console.log(palindrome("bennana"));
console.log(palindrome("racecar"));
console.log(palindrome("madam"));
console.log(palindrome("mama"));