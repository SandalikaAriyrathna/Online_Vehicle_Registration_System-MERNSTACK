const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors=require("cors");

const VehicleRoute = require("./routes/vehicles");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
dotenv.config();
app.use(cors()) 
app.use(express.json());

mongoose
.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.use("/api/vehicles", VehicleRoute);

app.listen("5000", () => {
    console.log("Backend is running.");
  });