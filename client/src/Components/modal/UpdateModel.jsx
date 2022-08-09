import React, { useEffect, useState , } from 'react'
import { Col, Row, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import swal from 'sweetalert';
import { useParams  } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function UpdateModel(props) {

    const [vid, setVid] = useState("");
    const [license_type, setLicenseType] = useState("");
    const [license_plate, setLicensePlate] = useState("");
    const [name, setName] = useState("");
    const [contact_number, setContactNumber] = useState("");
    const [show, setShow] = useState("");
    const navigate = useNavigate();
   
    const handleClose = () => setShow(false);
 
    // Get ID from URL
    const params = useParams();
        
    const [posts, setPosts] = useState([]);

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
 

    const updateShow = () => {
        // setVid(props.vid)
        axios.get('http://localhost:5000/api/vehicle/' + params.vid).then(function (response) {
            console.log(response.data)     
            setVid(response.data['vid']);
            setLicenseType(response.data['license_type']);
            setLicensePlate(response.data['license_plate']);
            setName(response.data['name']);
            setContactNumber(response.data['contact_number']);
            setShow(true)

        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });


    };

    function submitForm(e) {
        e.preventDefault();
   
        axios.put('http://localhost:5000/api/vehicle/update/' + params.vid, vehicleData)
            .then(function (response) {     
                console.log(response.data)       
                setVid('');
                setLicenseType('');
                setLicensePlate('');
                setName('');
                setContactNumber('');
                setShow(false);
                swal({ text: "Vehicle Successfully Updated", icon: "success", button: "Okay!" }).then((value) => {
                    window.location.replace(`/vehicledetails/${response.data.vid}`,{replace:true});
                });
              
            })
            .catch(function (error) {
                console.log(error);
            });
    }


   

    return (
        <>
            <Button variant='warning' className='btn-success me-3' onClick={updateShow} style={{width:"100px" }}>
                Edit
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Update Vehicle Details</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                    <Form>

                        <Col sm={10}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">
                            License Type 
                            </Form.Label>
                            <Col sm="7">
                            <Form.Control type="text" placeholder="Enter Dress Type " value={license_type} onChange={(e)=>setLicenseType(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >
                            License Plate
                            </Form.Label>
                            <Col sm="5" >
                            <Form.Control type="text" placeholder="Enter Dress Size" value={license_plate} onChange={(e)=>setLicensePlate(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">
                            Name
                            </Form.Label>
                            <Col sm="7">
                            <Form.Control type="Email" placeholder="Enter Quantity"  value={name} onChange={(e)=>setName(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">
                            Contact Number
                            </Form.Label>
                            <Col sm="7">
                            <Form.Control type="Email" placeholder="Enter Material" value={contact_number} onChange={(e)=>setContactNumber(e.target.value)} />
                            </Col>
                        </Form.Group>
                        </Col>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Update Vehicle Details
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}