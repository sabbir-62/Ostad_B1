let countVowel = (str) => {
    let count = 0;
    str = str.toLowerCase();
    for(let i of str){
        if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
            count++;
        }
    }
    return count;
}
console.log("The number of Vowel : " , countVowel("Hello"));
console.log("The number of Vowel : " , countVowel("Umbrella"))