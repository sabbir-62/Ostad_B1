let express = require("express");
let multer = require("multer");
let path = require("path")
let app = express();

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

let upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb){
        const filetypes = /jpg|png/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if(mimetype && extname){
            return cb(null, true);
        }
        else{
            cb("image only")
        }
        console.log(file);
    }
}).single("image");


app.post("/image", (req, res) => {
    upload(req, res, (err) => {
        if(err){
            res.send("something went wrong");
        }
        res.send("upload success")
    })
})


app.listen(5000, function(){
    console.log("successful");
})