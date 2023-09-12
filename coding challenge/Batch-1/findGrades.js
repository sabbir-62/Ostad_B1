let result = {
    sabbir : 85,
    tania : 66,
    talha : 95,
    mashrufa : 56,
    habib : 40
}

Object.keys(result).forEach(function(number){

    if(result[number] >= 80){
        console.log(`${number} got A grade`)
    }
    else if(result[number] >= 60){
        console.log(`${number} got B grade`)
    }
    else if(result[number] >= 50){
        console.log(`${number} got C grade`)
    }
    else if(result[number] >= 40){
        console.log(`${number} got D grade`)
    }
    else{
        console.log(`${number} got F grade`)
    }
})