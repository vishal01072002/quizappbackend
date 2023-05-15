const express = require('express');
const app = express();
var cors = require("cors");

require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 5000

// middleware
app.use(express.json());

// import route and mount
const routes = require("./routes/quiz");
app.use("/api/v1",routes);

// server start
app.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT}`);
});

// connect DB
const connectDB = require('./config/database');
connectDB();

// default route
app.get("/",(req,res)=>{
    res.send("<h1>This is home page baby</h1>");
})