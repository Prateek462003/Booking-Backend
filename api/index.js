const express = require("express");
const port = 3000;
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");
const hotelsRoute = require("./routes/hotels.js");
const roomRoute = require("./routes/rooms.js");
const usersRoute = require("./routes/users.js");
const cookieparser = require("cookie-parser");
dotenv.config();

// Mongo DB Connection
const mongoose = require('mongoose');
const connect = async ()=>{
  try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  }catch(err){
    console.log(err);
  }
}

app.use(express.json());
app.use(cookieparser());


// ROuting TO different Pages
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/user", usersRoute);

// Error handling middleware
app.use((err, req, res, next)=>{
    const errStatus =  err.status || 500;
    const errMessage = err.message || "Something Went Wrong";
    return res.status(errStatus).json({
      success:false,
      status: errStatus,
      message: errMessage,
      stack:err.stack
    });
});


app.listen(port,()=>{
  connect();
  console.log("Connected To Backend");
})
