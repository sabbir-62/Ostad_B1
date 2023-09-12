const express = require("express");
const contactRoute = require("./api/routes/contact");
const mongoose = require("mongoose");
const app = express();

app.use("/api", contactRoute);

app.listen(3000, () => {
    console.log("server run successful")
})