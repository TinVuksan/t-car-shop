import React from 'react';
import { observer } from 'mobx-react';
import {Col, Row,FloatingLabel, Form, Button} from 'react-bootstrap'

export default observer(({ form }) => {

  return(
    <Form className = "addForm">
        <Row className = "mt-3">
            <Col>
            <Form.Group className = "mb-3">
            <FloatingLabel
            label = {form.$('VehicleMake').label}>

            <Form.Control {...form.$('VehicleMake').bind()}
            //onChange = {handleChange} 
            type = "text" 
            placeholder = "Audi/BMW/Mercedes..." 
            //value = {formData.Make}
            
            />
            </FloatingLabel>
            <p><small className = "validationError">{form.$('VehicleMake').error}</small></p>
            </Form.Group>
            </Col>

            <Col>
            <Form.Group className = "mb-3">
            <FloatingLabel
            label = {form.$('VehicleModel').label}
            >
            <Form.Control {...form.$('VehicleModel').bind()}
           // onChange = {handleChange}  
            type = "text" 
            placeholder = "A3/C220/M5..." 
            //value = {formData.Model}
            />
            </FloatingLabel>
            <p><small className = "validationError">{form.$('VehicleModel').error}</small></p>
            </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col md="auto">
            <Form.Group className = "mb-3">
            <FloatingLabel
            label = {form.$('VehiclePower').label}
            >
            <Form.Control {...form.$('VehiclePower').bind()}
            //onChange = {handleChange} 
            type = "number" 
            placeholder = "103, 77, 50..."
            //value = {formData.Power}
            
            />
            </FloatingLabel>
            <p><small className = "validationError">{form.$('VehiclePower').error}</small></p>
            </Form.Group>
            </Col>
        </Row>

        <Row>
        <Col>
            <Form.Group className = "mb-3">
            <FloatingLabel
            label = {form.$('VehicleRegDate').label}
            >
            <Form.Control {...form.$('VehicleRegDate').bind()}
            //onChange = {handleChange} 
            type = "date" 
            //value = {formData.RegDate}
            />
            </FloatingLabel>
            <p><small className = "validationError">{form.$('VehicleRegDate').error}</small></p>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className = "mb-4">
            <FloatingLabel
            label = {form.$('VehicleRegExpDate').label}
            >
            <Form.Control {...form.$('VehicleRegExpDate').bind()}
            type = "date" 
            //value = {formData.RegExpDate}
            
            />
            </FloatingLabel>
            <p><small className = "validationError">{form.$('VehicleRegExpDate').error}</small></p>
            </Form.Group>
        </Col>
        </Row>

        <Form.Group className = "mb-3">
        <FloatingLabel
        label = {form.$('VehicleInfo').label}
        >
        <Form.Control {...form.$('VehicleInfo').bind()}
        //onChange = {handleChange} 
        as = "textarea"
        placeholder = "Good vehicle, nice looking..." 
        //value = {formData.Info}
        />
        </FloatingLabel>
        <p><small className = "validationError">{form.$('VehicleInfo').error}</small></p>
        </Form.Group>

        <Form.Group className = "mb-3">
        <FloatingLabel
        label = {form.$('VehicleImage').label}
        >
        <Form.Control {...form.$('VehicleImage').bind()}
        //onChange = {handleChange} 
        type = "text" 
        placeholder = "Enter image URL" 
        //value = {formData.Image}
        />
        </FloatingLabel>
        <p><small className = "validationError">{form.$('VehicleImage').error}</small></p>
        </Form.Group>
        
        <Button className="addForm-submit" variant = "success" onClick = {form.onSubmit}>Submit</Button>
        <p>{form.error}</p>
        </Form>
  )
  
});

