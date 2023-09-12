let express = require('express');
app = express();

app.get('/',function(req, res){
    res.send("Hello Express Js");
})

app.listen(5050)
console.log("server run successfully")