require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const expressLayouts = require('express-ejs-layouts')
const morgan = require("morgan");
const cors = require("cors");
const travelBlogController = require ('./controller/travelBlogController')

app.use(express.static("public"));
app.use(expressLayouts)
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended:true}));
app.use('/travelblog', travelBlogController)

app.get("/", (req,res) =>{
    res.send("Testing Nom@d App")
})

app.listen(PORT,() => console.log("Testing Travel Blog", PORT))