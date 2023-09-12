
//Create a Clock Function that trigger every 1 second
function clock() {
    // Retrieve the divs using getElementById and stores them
    var hour = document.getElementById('hour')
    var min = document.getElementById('min')
    var sec = document.getElementById('sec')

    // Create Date Object, stores it time variable and using it's methods
    let time = new Date();
    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()
    let dayName = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();
    let date = time.getDate();

    // Two arrays are here, one for months name and one is days name
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var presentDay=week[dayName]+", "+months[month]+" "+date+", "+year;
    const dayIntro=document.getElementById("dayName");

    dayIntro.innerHTML = presentDay;


    // Check the hours value
    if (h > 12){
        h -= 12;
    }
    if (h == 0) {
        h = 12;
    }

    h = (h<10) ? "0" + h : h
    m = (m<10) ? "0" + m : m
    s = (s<10) ? "0" + s : s
    
    hour.innerHTML = h
    min.innerHTML = m
    sec.innerHTML = s
}

// invoke the clock function in every 1s
var interval = setInterval(clock,1000);






//Code Description

/**This code defines a JavaScript function named clock that updates the time on a webpage every second using setInterval Method.

The function starts by retrieving the hour, min, and sec HTML elements from the page using document.getElementById. It then creates a new Date object using the current time, and retrieves the current hour, minute, and second from that object using the getHours, getMinutes, and getSeconds methods. It also retrieves the current day of the week, month, year, and date.

The function then formats the day of the week, month, date, and year into a string and sets it as the text content of an HTML element with the ID dayName.

Next, the function converts the hour to 12-hour time if it is greater than 12 or equal to 0. It also pads the minute and second values with a leading zero if they are less than 10.

Finally, the function sets the text content of the hour, min, and sec HTML elements to the formatted time.

The function is called every second using setInterval and passed the clock function and an interval of 1000 milliseconds (1 second). This causes the clock to update every second with the current time.**/