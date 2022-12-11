import { observer } from 'mobx-react';
import {Col, Row, Form, Button} from 'react-bootstrap'
import Input from './Inputs/Input';

const AddVehicleForm  =  observer(({ form }) => {

  return(

    <Form className = "form">
        <Row className = "mt-3">
            <Col>
                <Input field={form.$('VehicleMake')} />
            </Col>
            <Col>
                <Input field={form.$('VehicleModel')} />
            </Col>
        </Row>

        <Row>
            <Col md="auto">
                <Input field={form.$('VehiclePower')} type='number' />
            </Col>
        </Row>

        <Row>
            <Col>
                <Input field={form.$('VehicleRegDate')} type='date' />
            </Col>
            <Col>
                <Input field={form.$('VehicleRegExpDate')} type='date' />
            </Col>
        </Row>
       
                <Input field={form.$('VehicleInfo')} />
                <Input field={form.$('VehicleImage')} />
        
                <Button className="form-submit" variant = "success" onClick = {form.onSubmit}>Submit</Button>
                <p>{form.error}</p>
    </Form>
  )
  
});

export default AddVehicleForm;
