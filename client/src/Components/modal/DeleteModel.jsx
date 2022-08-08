import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState , } from 'react'
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import swal from 'sweetalert'
import { useParams  } from "react-router-dom";

export default function DeleteClothModel(props) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [show, setShow] = useState(false);
    const [vehicle, setVehicle] = useState([]);
  
    const [vid, setVid] = useState("");
    const [vehicle_type, setVehicleType] = useState("");
    const [license_plate, setLicensePlate] = useState("");
    const [name, setName] = useState("");
    const [contact_number, setContactNumber] = useState("");
    const [license_type, setLicenseType] = useState("");

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

    const vehicleData = {
        vid,
        license_type,
        license_plate,
        name,
        contact_number,
    }
 



    const DeleteShow = () => {
        console.log( params.vid)
       
        axios.get("http://localhost:5000/api/vehicle/" + params.vid)
        .then(function (response) {
            setVid('');
            setLicenseType('');
            setLicensePlate('');
            setName('');
            setContactNumber('');
            
            setShow(true)


        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });


    };

    function submitForm(e) {
        e.preventDefault();
        axios.delete('http://localhost:5000/api/vehicle/delete/' + params.vid,vehicleData)
            .then(function (response) {
                setShow(false);
                swal({ text: "Cloth Successfully Deleted", icon: "success", button: "Okay!" }).then((value) => {
                    window.location.replace("/");
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

  

    return (
        <>
            <Button className='btn-danger me-2' onClick={DeleteShow} style={{width:"100px"}}>
                Delete
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Delete Vehicle Details</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                  <h5>Are you sure you want to remove your registration?</h5>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Delete Vehicle Details
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

