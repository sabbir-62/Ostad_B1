const e = require("express");
const express = require("express");
const app = express();


app.get("/", (req, res, next) => {
      console.log("hello");
      next();
    },
    (req, res) => {
      res.send(`<div>
      <h2>Welcome to GeeksforGeeks</h2>
      <h5>Tutorial on Middleware</h5>
    </div>`);
    }
  );

  app.listen(3000, () => {
    console.log("server run successfull");
  })