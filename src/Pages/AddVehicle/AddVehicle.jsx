import React from "react"
import "./AddVehicle.css"
import Navbar from "../../Components/Navbar/Navbar"
import addStore from "../../Stores/AddVehicleStore"
import {useState} from "react"
import {Col, Row,FloatingLabel, Form, Button} from 'react-bootstrap'
import { observer } from 'mobx-react'
import { useNavigate } from "react-router-dom"

function DodajVozilo() {
    const Navigate = useNavigate()
    const [formData, setFormData] = useState({
	 	Make: "", Model: "", Power: "", RegDate: "",  RegExpDate: "", Info: "", Image: ""
	 })

     const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
                
            }
            
        })
    }
    
    const handleSubmit = () => {
        addStore.addVehicle(formData);
        Navigate("/", {replace:true})
    }
    
    return (
        <>
        <Navbar />
        <Form className = "addForm">
        <Row className = "mt-3">
            <Col>
            <Form.Group className = "mb-3">
            <FloatingLabel
            label = "Vehicle Make">

            <Form.Control 
            onChange = {handleChange} 
            name = "Make" 
            type = "text" 
            placeholder = "Audi/BMW/Mercedes..." 
            value = {formData.Make}
            />
            </FloatingLabel>
            </Form.Group>
            </Col>

            <Col>
            <Form.Group className = "mb-3">
            <FloatingLabel
            label = "Vehicle Model"
            >
            <Form.Control 
            onChange = {handleChange} 
            name = "Model" 
            type = "text" 
            placeholder = "A3/C220/M5..." 
            value = {formData.Model}
            />
            </FloatingLabel>
            </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col md="auto">
            <Form.Group className = "mb-3">
            <FloatingLabel
            label = "Power (kW)"
            >
            <Form.Control 
            onChange = {handleChange} 
            name = "Power" 
            type = "number" 
            placeholder = "103, 77, 50..."
            value = {formData.Power}
            
            />
            </FloatingLabel>
            </Form.Group>
            </Col>
        </Row>

        <Row>
        <Col>
            <Form.Group className = "mb-3">
            <FloatingLabel
            label = "Registration date"
            >
            <Form.Control 
            onChange = {handleChange} 
            name = "RegDate" 
            type = "date" 
            value = {formData.RegDate}
            />
            </FloatingLabel>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className = "mb-4">
            <FloatingLabel
            label = "Registration Expire Date"
            >
            <Form.Control 
            onChange = {handleChange} 
            name = "RegExpDate" 
            type = "date" 
            value = {formData.RegExpDate}
            
            />
            </FloatingLabel>
            </Form.Group>
        </Col>
        </Row>

        <Form.Group className = "mb-3">
        <FloatingLabel
        label = "Vehicle info"
        >
        <Form.Control 
        onChange = {handleChange} 
        name = "Info" 
        as = "textarea"
        placeholder = "Good vehicle, nice looking..." 
        value = {formData.Info}
        />
        </FloatingLabel>
        </Form.Group>

        <Form.Group className = "mb-3">
        <FloatingLabel
        label = "Image URL">
        <Form.Control 
        onChange = {handleChange} 
        name = "Image" 
        type = "text" 
        placeholder = "Enter image URL" 
        value = {formData.Image}
        />
        </FloatingLabel>
        </Form.Group>
        
        <Button className="addForm-submit" variant = "success" onClick = {handleSubmit}>Submit</Button>
        </Form>
         
        </>
           
    )
}

export default observer(DodajVozilo);