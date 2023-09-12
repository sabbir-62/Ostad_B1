//select calculate btn
const btn = document.getElementById('calculateBtn');


// btn click event
btn.addEventListener('click', () => {

    let height = document.querySelector('#heightInput').value;
    let weight = document.querySelector('#weightInput').value;

    //check the input is filled or not
    if (height == '' || weight == '') {
        alert("Please fill all the input fields !!");
        return;
    }

    //calculate bmi using mathematical formula
    height = height;
    let BMI = (weight / (height * height));
    BMI = BMI.toFixed(2);

    //show the bmi value
    document.querySelector('.value').innerHTML = BMI;

    //check the person is healthy or not
    let status = '';

    if (BMI < 18.5) {
        status = 'Underweight';
    }
    else if (BMI >= 18.5 && BMI < 25){
        status = "Healthy";
    }
    else if (BMI >= 25 && BMI < 30) {
        status = "Overweight";
    }
    else if(BMI >=30){
        status = "Obese";
    }

    //show comment
    document.querySelector('.comment').innerHTML = `Comment: You are <span id="comment">${status}</span>`
});


