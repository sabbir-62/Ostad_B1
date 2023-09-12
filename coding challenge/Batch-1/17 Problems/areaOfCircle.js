let calculateArea = (radius) => Math.PI * Math.pow(radius,2);
let calculatePerimeter = (radius) => 2 * Math.PI * radius;

let printResult = (area,perimeter) => console.log("The area is : ", area.toFixed(2), "The perimeter is : ", perimeter.toFixed(2));

printResult(calculateArea(10), calculatePerimeter(10));
printResult(calculateArea(15), calculatePerimeter(15));
printResult(calculateArea(25), calculatePerimeter(25));
