//modules
const express = require("express");
const dotenv = require("dotenv");
//creat app
const app = express();
//setup the enviroment
dotenv.config();
//configuration ejs
app.set("view engine", "ejs");

//router
app.get("/", (req, res) => {
    res.render("index")
})
//run sever
const PORT=process.env.PORT||5000
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));