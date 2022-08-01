const router = require("express").Router();
const Vehicle = require("../model/Vehicle");

//CREATE PhysicalFees
router.post("/", async (req, res) => {
    const newVehicle = new Vehicle(req.body);
  
    let code = 1;
    try {
      const vehiclecount = await Vehicle.find().sort({_id:-1}).limit(1)
      if(vehiclecount.length > 0)
        code += vehiclecount[0].code
        newVehicle.vid = 'VID00'+ code;
        newVehicle.code = code;
  
        try {
          const savedVehicle = await newVehicle.save();
          res.status(200).json(savedVehicle);
        } catch (err) {
          res.status(500).json(err);
        }
  
    } catch (error) {
      console.log(error)
    }
  
  });
  
 //UPDATE CLOTH
router.put("/update/:vid", async(req, res) => {
    try {
      const updatedVehicle = await Vehicle.findOneAndUpdate({'vid':req.params.vid},
        {
          $set: req.body
        },{new:true}
      );
     res.status(200).json(updatedVehicle);
    
  } catch (err) {
    res.status(500).json(err);
  }
})


//DELETE CLOTH
router.delete("/delete/:vid", async (req, res) => {
  try {
    const vehicle = await Vehicle.findOneAndDelete({'vid':req.params.vid});
    try {
      await vehicle.delete();
      res.status(200).json("Vehicle has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET CLOTH DETAILS
router.get("/:vid", async (req, res) => {
  try {
    const vehicle = await Vehicle.findOne({ 'vid': req.params.vid });
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET VIEW ALL CLOTH DETAILS
router.get("/", async (req, res) => {
    try {
      const vehicle = await Vehicle.find();
      res.status(200).json(vehicle);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports = router;
  