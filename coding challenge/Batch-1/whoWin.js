let dolphinScores = [96, 108, 89];
let koalasScores = [88, 91, 110];
let minimumScore = 100;

function average(scores) {
    let sum = 0;
    for(let score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

let dolphinAverage = average(dolphinScores);
let koalasAverage = average(koalasScores);

if(dolphinAverage >= 100 && dolphinAverage > koalasAverage) {
    console.log("Dolphin Win!");
}
else if(koalasAverage >= 100 && koalasAverage > dolphinAverage) {
    console.log("Koalas Win!");
}
else if(dolphinAverage === koalasAverage && dolphinAverage >= 100 && koalasAverage >= 100) {
    console.log("Draw!");
}
else{
    console.log("No one win!");
}
