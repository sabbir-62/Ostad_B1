let express = require("express");

let app = express();


// string response
app.get("/", function(req, res){
    res.send("This is home page");
})
app.get("/contact", function(req, res){
    res.send("This is contact page");
})
app.post("/address", function(req,res){
    res.send("This is address page");
})
app.put("/info", function(req,res){
    res.send("This is info page");
})

// status response
app.put("/gallery", function(req,res){
    res.status(401).end("Unauthorize");
})

// json response
app.post("/about", function(req,res){
    let jsonArray = [
        {
            "name": "Sabbir Hossain",
            "id": 1234234,
            "dept": "ECE"
        },
        {
            "name": "Moshiur Rahman",
            "id": 8768576,
            "dept": "CSE"
        },
        {
            "name": "Hasibul Islam",
            "id": 5465546,
            "dept": "ECE"
        }
    ]
    res.json(jsonArray);
})

// download response
app.get("/d", function(req,res){
    res.download("./images/image.jpg");
})

//response redirect
app.get("/bangladesh", function(req,res){
    res.redirect("http://localhost:3000/india");
})
app.get("/india", function(req,res){
    res.send("This is India");
})

//response header
app.get("/header", function(req,res){
    res.append("name", "Sabbir Hossain");
    res.status(201).end("Welcome");  
})

//set cookies
app.get("/cookie", (req,res) => {
    res.cookie("name", "sabbir");
    res.cookie("age", "22 years old");
    res.end("Cookies set successful");
})

app.listen(3000);
console.log("server run successfully")