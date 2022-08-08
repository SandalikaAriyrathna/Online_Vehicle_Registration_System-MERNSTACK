const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({

    vid: {
        type: String,
        required: true,
        unique: true
      },
    
    license_type: {
      type:String,
      required: true,
    },

    vehicle_type: {
      type:String,
      required: true,
    },
   
    license_plate: {
        type: String,
        required: true
      },

    name: {
        type: String,
        required: true,
      },
      
    contact_number: {
        type: String,
        required: true
      },
      code:{
        type: Number,
        required:true,
      },
    

  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", VehicleSchema);

