const express = require("express");
  const app = express();
  const multer = require("multer");
  const path = require("path");

  //storage setting
  let storage = multer.diskStorage({ 
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname,"uploads"))
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
  });

  //multer setting
  let upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
   
  }).single('myfile');

  //image upload using post method
  app.post("/upload", upload,(req, res) => {
    res.send("image uploaded");
  });

  //error handling
  app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(404).send(err.message);
  })

  //port connection
  app.listen(8080,
    (error) => {
      if (error) {
        console.log("error");
      }
    },
    () => {
      console.log("listening at port 8080");
    }
  );
