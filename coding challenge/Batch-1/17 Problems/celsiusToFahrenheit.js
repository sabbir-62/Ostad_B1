let temperature = [0,20,40];
let celsiusToFahrenheit = (temperature) => (temperature*9/5) + 32;
for(let i of temperature){
    let result = celsiusToFahrenheit(i);
    console.log(i, "Degree", "=", result, "Fahrenheit");
}