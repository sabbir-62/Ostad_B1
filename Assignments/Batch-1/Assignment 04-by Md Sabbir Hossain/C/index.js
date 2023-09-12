let express = require("express");
let app = express();



// download response
app.get("/", function(req,res){
    res.download("./images/image.jpg");
})


app.listen(8080);
console.log("server run successfully");