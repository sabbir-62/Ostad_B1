//store marks weight and height
let marksWeight1 = 78, marksHeight1 = 1.69;
let marksWeight2 = 95, marksHeight2 = 1.88;

//store jons weight and height
let jonsWeight1 = 92, jonsHeight1 = 1.95;
let jonsWeight2 = 85, jonsHeight2 = 1.76;

//calculating bmi
let bmi = (mass, height) => mass / Math.pow(height,2);

//calling bmi function
let marksBMI1 = Math.round(bmi(marksWeight1, marksHeight1));
let jonsBMI1 = Math.round(bmi(jonsWeight1, jonsHeight1));

console.log(`For 1st data test Mark's BMI ${marksBMI1} and JON's BMI ${jonsBMI1}`);

let marksBMI2 = Math.round(bmi(marksWeight2, marksHeight2));
let jonsBMI2 = Math.round(bmi(jonsWeight2, jonsHeight2));

console.log(`For 2nd data test Mark's BMI ${marksBMI2} and JON's BMI ${jonsBMI2}`);

//boolean information about marks bmi
let checkBMI = (marks,jons) =>{
    let markHigherBMI = false;
    if(marks>jons){
        markHigherBMI = true;
    }
    return markHigherBMI;
}
console.log(`Mark's BMI higher than Jon's for 1st dataset = ${checkBMI(marksBMI1,jonsBMI1)}`);
console.log(`Mark's BMI higher than Jon's for 2nd dataset = ${checkBMI(marksBMI2,jonsBMI2)}`);