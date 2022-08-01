const mongoose = require("mongoose");
  
const VehicleSchema = new mongoose.Schema(
  { 
    vid: {
      type: String,
      required: true,
      unique: true,
    },
    liciense_plate: {
        type: String,
        required: true,
    },
    vehicle_type: {
        type: String,
        required: true,
      },
    author: {
      type: String,
      required: true,
    },
    contact:{
      type: String,
      required:true,
    },
    code:{
      type: Number,
      required:true,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", VehicleSchema);