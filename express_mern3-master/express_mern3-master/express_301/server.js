const express = require('express');
const helmet = require('helmet');
const app = express();
const router = require("./router");
const productRouter=require("./productRouter")
// const userRouter = require("./userRouter");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());


app.use("/", router);
app.use("/product", productRouter);

// app.use("/", router);
// app.use("/user", userRouter);







app.listen(8000, () => {
    console.log("The server is running successfully");
})