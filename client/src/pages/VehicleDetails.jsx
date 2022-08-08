import axios from 'axios';
import React, { useEffect, useState , } from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

import { useParams ,Link } from "react-router-dom";
import DeleteModel from '../Components/modal/DeleteModel';
import UpdateModel from '../Components/modal/UpdateModel';


export default function VehicleDetails(props) {

  const [vehicle, setVehicle] = useState([]);
  
  const [vid, setVid] = useState("");
  const [vehicle_type, setVehicleType] = useState("");
  const [license_plate, setLicensePlate] = useState("");
  const [name, setName] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [license_type, setLicenseType] = useState("");

  // const [data, setData] = useState([]);
  

  // useEffect(async()=>{
  //     let result = await fetch("http://localhost:8000/api/vehicle/"+props.match.params.id)
  //     console.log(result)
  // },[])

  // Get ID from URL
const params = useParams();
    
const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:5000/api/vehicle/${params.vid}`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

 return (
        <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80')",backgroundRepeat:"no-repeat",WebkitBackgroundSize:"cover",backgroundSize:"cover"}}>
        <Header/>
        <div className="card text-center"  style={{width:"500px", marginLeft:"550px",marginTop:"40px",marginBottom:"100px",height:"600px", background: "linear-gradient(140deg, rgba(72, 115, 150, 1) 50%, rgba(57, 108, 150, 0.65) 65%, rgba(42, 102, 150, 0.6) 50%, rgba(27, 95, 150, 0.95) 80%, rgba(12, 88, 150, 1) 90%, rgba(0, 83, 150, 0.8) 70%)",marginTop:"50px" }}>
  
          <div className="card-body" style={{"marginTop":"40px"}}>
             <h1 className="card-title text-white">Vehicle Details</h1>
             <br />
             <div class="container text-light ">
                <div class="row">
                    <div class="col d-flex text-left" style={{marginLeft:"50px"}}>
                    <h4>Name</h4>
                    </div>
                    <div class="col d-flex text-left">
                    <h6 className="card-title" style={{marginLeft:"20px"}}>{posts.name}</h6>
                    </div>
                </div>
<br />
                <div class="row">
                    <div class="col d-flex text-left" style={{marginLeft:"50px"}}>
                    <h4>Vehicle Type</h4>
                    </div>
                    <div class="col d-flex text-left">
                    <h6 className="card-text" style={{marginLeft:"20px"}}>{posts.vehicle_type}</h6>
                    </div>
                </div>
<br />
                <div class="row">
                    <div class="col d-flex text-left" style={{marginLeft:"50px"}}>
                    <h4>Licience Plate</h4>
                    </div>
                    <div class="col d-flex text-left">
                    <h6 className="card-text" style={{marginLeft:"20px"}}>{posts.license_plate}</h6>
                    </div>
                </div>
<br />
                <div class="row">
                    <div class="col d-flex text-left" style={{marginLeft:"50px"}}>
                    <h4>Contact Number</h4>
                    </div>
                    <div class="col d-flex text-left">
                    <h6 className="card-text"style={{marginLeft:"20px"}}>{posts.contact_number}</h6>
                    </div>
                </div>
<br />
                <div class="row">
                    <div class="col d-flex text-left" style={{marginLeft:"50px"}}>
                    <h4>Licience Type</h4>
                    </div>
                    <div class="col d-flex text-left">             
                    <h6 className="card-text" style={{marginLeft:"20px"}}>{posts.license_type}</h6>
                    </div>
                </div>


            </div>
              
                
   <br /><br />
             <UpdateModel/>
             <DeleteModel/>
  </div>
  
</div>

<Footer/>
        </div>
    )
}