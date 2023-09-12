let express = require("express");
let app = express();

let bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/", function(req,res){
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.end(jsonString);
})

app.listen(5000, function(){
    console.log("server run successful");
})