//require express
const express = require('express');
const path = require("path")
const app = express();
const cors = require('cors');

const connectDB = require('./config/connectDB');

//require .env
require('dotenv').config();

//PORT
const PORT = process.env.PORT

//Connect DataBase
connectDB();


// middleware global
app.use(cors());
app.use("/uploads", express.static('uploads'));

app.use(express.json({limit: '50mb'}));
// router
app.use("/api/user", require("./routes/user"));
app.use("/api/category", require("./routes/category"));
app.use("/api/product", require("./routes/product"));
app.use("/api/order", require("./routes/order"));
app.use("/api/favorite", require("./routes/favorite"));

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));
    app.get("*",(req , res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

//Connect Server
app.listen(PORT,(err) =>
err ? console.error(err) 
: console.log(`Running Server http://localhost:${PORT}`) )