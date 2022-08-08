const router = require("express").Router();
const Vehicle = require("../model/Vehicle");

const inputValidate = (numPlate) => {
  // var numPlate = 'ABC-1236';
  return new Promise((resolve,reject)=>{
  
 
  let formatedNum = '';
  let numArr = numPlate.toUpperCase().split('');
  let type = '';
  let isTrue = false;
  let pr = ['WP', 'NW'];
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] === 'S' && numArr[i + 1] === 'R' && numArr[i + 2] === 'I') {
      type = 'Vintage';
    }
    if (numArr[i].match(/[A-Z]/i)) {
      type = 'Modern';
    }
    if (numArr[i] == ' ') {
      numArr.splice(i, 1);
      i--;
    }
    if (numArr[i] == '-') {
      numArr.splice(i, 1);
      i--;
    }
  }
  if (type == '' && numArr.length >= 6 && numArr.length <= 8) {
    type = 'Old';
  }
  if (type == 'Modern') {
    if ((numArr.length == 8 || numArr.length == 9) && pr.includes(numArr[0] + numArr[1])) {
      formatedNum += numArr[0] + numArr[1] + ' ';
      if (numArr[2].match(/[A-Z]/i) && numArr[3].match(/[A-Z]/i) && numArr[4].match(/[A-Z]/i) && numArr[5].match(/[0-9]/i) && numArr[6].match(/[0-9]/i) && numArr[7].match(/[0-9]/i) && numArr[8].match(/[0-9]/i)) {
        formatedNum += numArr[2] + numArr[3] + numArr[4] + '-' + numArr[5] + numArr[6] + numArr[7] + numArr[8];
        isTrue = true;
      } else if (numArr[2].match(/[A-Z]/i) && numArr[3].match(/[A-Z]/i) && numArr[4].match(/[0-9]/i) && numArr[5].match(/[0-9]/i) && numArr[6].match(/[0-9]/i) && numArr[7].match(/[0-9]/i)) {
        formatedNum += numArr[2] + numArr[3] + '-' + numArr[4] + numArr[5] + numArr[6] + numArr[7];
        isTrue = true;
      } else {
        isTrue = false
      }
    } else if (numArr.length == 7 || numArr.length == 6) {
      if (numArr[0].match(/[A-Z]/i) && numArr[1].match(/[A-Z]/i) && numArr[2].match(/[A-Z]/i) && numArr[3].match(/[0-9]/i) && numArr[4].match(/[0-9]/i) && numArr[5].match(/[0-9]/i) && numArr[6].match(/[0-9]/i)) {
        formatedNum += numArr[0] + numArr[1] + numArr[2] + '-' + numArr[3] + numArr[4] + numArr[5] + numArr[6];
        isTrue = true;
      } else if (numArr[0].match(/[A-Z]/i) && numArr[1].match(/[A-Z]/i) && numArr[2].match(/[0-9]/i) && numArr[3].match(/[0-9]/i) && numArr[4].match(/[0-9]/i) && numArr[5].match(/[0-9]/i)) {
        formatedNum += numArr[0] + numArr[1] + '-' + numArr[2] + numArr[3] + numArr[4] + numArr[5];
        isTrue = true;
      } else {
        isTrue = false
      }
    }
  }

  if (type == 'Old') {
    if (numArr.length == 6) {
      if (numArr[0].match(/[1-9]/i) && numArr[1].match(/[0-9]/i) && numArr[2].match(/[0-9]/i) && numArr[3].match(/[0-9]/i) && numArr[4].match(/[0-9]/i) && numArr[5].match(/[0-9]/i)) {
        formatedNum += numArr[0] + numArr[1] + '-' + numArr[2] + numArr[3] + numArr[4] + numArr[5];
        isTrue = true;
      } else {
        isTrue = false
      }
    } else if (numArr.length == 7) {
      if (numArr[0].match(/[1-9]/i) && numArr[1].match(/[0-9]/i) && numArr[2].match(/[0-9]/i) && numArr[3].match(/[0-9]/i) && numArr[4].match(/[0-9]/i) && numArr[5].match(/[0-9]/i) && numArr[6].match(/[0-9]/i)) {
        formatedNum += numArr[0] + numArr[1] + numArr[2] + '-' + numArr[3] + numArr[4] + numArr[5] + numArr[6];
        isTrue = true;
      } else {
        isTrue = false
      }
    } else {
      isTrue = false
    }
  }

  if (type == 'Vintage') {
    if (numArr.length == 9) {
      if (numArr[0].match(/[1-9]/i) && numArr[1].match(/[0-9]/i) && numArr[2] == 'S' && numArr[3] == 'R' && numArr[4] == 'I' && numArr[5].match(/[0-9]/i) && numArr[6].match(/[0-9]/i) && numArr[7].match(/[0-9]/i) && numArr[8].match(/[0-9]/i)) {
        formatedNum += numArr[0] + numArr[1] + numArr[2] + numArr[3] + numArr[4] + numArr[5] + numArr[6] + numArr[7] + numArr[8];
        isTrue = true;
      } else {
        isTrue = false
      }
    } else {
      isTrue = false
    }
  }
  
if(isTrue){
  resolve({type:type, formatedNum:formatedNum})
  }else{
    reject(new Error('Invalid'))
  }
})
}




//CREATE Vehicle
router.post("/", async (req, res) => {


  let code = 1;
  try {
     inputValidate(req.body.license_plate).then(async(x) => {
      console.log(x)
        const newVehicle = new Vehicle({
          vid : req.body.vid,
          license_plate : x.formatedNum,
          license_type : x.type,
          vehicle_type : req.body.vehicle_type,
          name : req.body.name,
          contact_number : req.body.contact_number,
          code : req.body.code,
         
        });
        
        const vehiclecount = await Vehicle.find().sort({ _id: -1 }).limit(1)
        if (vehiclecount.length > 0)
          code += vehiclecount[0].code
        newVehicle.vid = 'VID00' + code;
        newVehicle.code = code;

        try {
          const savedVehicle = await newVehicle.save();
          res.status(200).json(savedVehicle);
        } catch (err) {
          res.status(500).json(err);
        }
    }).catch ((error)=>  res.status(200).json('Invalid!!'))
    


  } catch (error) {
    console.log(error)
  }

});

//UPDATE Vehicle
router.put("/update/:vid", async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findOneAndUpdate({ 'vid': req.params.vid },
      {
        $set: req.body
      }, { new: true }
    );
    res.status(200).json(updatedVehicle);

  } catch (err) {
    res.status(500).json(err);
  }
})


//DELETE Vehicle
router.delete("/delete/:vid", async (req, res) => {
  try {
    const vehicle = await Vehicle.findOneAndDelete({ 'vid': req.params.vid });
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

//GET Vehicle DETAILS
router.get("/:vid", async (req, res) => {
  try {
    const vehicle = await Vehicle.findOne({ 'vid': req.params.vid });
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET VIEW ALL Vehicle DETAILS
router.get("/", async (req, res) => {
  try {
    const vehicle = await Vehicle.find();
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;