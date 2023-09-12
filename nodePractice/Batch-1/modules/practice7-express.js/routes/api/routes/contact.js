const express = require("express");
const routes = express.Router();

// routes.get("/", (req, res) => {
//     res.status(200).json({
//         name: "sabbir",
//         lastName: "hossain"
//     })
// })


routes.get("/:id", (req,res) => {
    //console.log(req.url);
    // res.json({
    //     id: req.url
    // })
    res.send(req.url)
})
module.exports = routes;