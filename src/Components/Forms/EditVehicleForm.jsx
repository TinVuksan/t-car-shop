import { useEffect } from 'react';
import { observer } from 'mobx-react';
import {Col, Row, Form, Button} from 'react-bootstrap'
import editStore from '../../Stores/EditVehicleStore';
import Input from './Inputs/Input';

const EditVehicleForm = observer(({form}) => {
    useEffect(() => {
      form.$('id').set(editStore.vehicle.id)
      form.$('VehicleMake').set(editStore.vehicle.VehicleMake)
      form.$('VehicleModel').set(editStore.vehicle.VehicleModel)
      form.$('VehiclePower').set(editStore.vehicle.VehiclePower)
      form.$('VehicleRegDate').set(editStore.vehicle.VehicleRegDate)
      form.$('VehicleRegExpDate').set(editStore.vehicle.VehicleRegExpDate)
      form.$('VehicleInfo').set(editStore.vehicle.VehicleInfo)
      form.$('VehicleImage').set(editStore.vehicle.VehicleImage)
        
    }, [form])
    
    return (
        
        <Form className = "form">
            <Col>
                <Input field = {form.$('id')} disabled />
            </Col>
        <Row className = "mt-3">
            <Col>
                <Input field = {form.$('VehicleMake')} />
            </Col>
            <Col>
            <Input field = {form.$('VehicleModel')} />
            </Col>
        </Row>

        <Row>
            <Col md="auto">
                <Input field = {form.$('VehiclePower')} type= 'number' />           
            </Col>
        </Row>

        <Row>
            <Col>
                <Input field = {form.$('VehicleRegDate')} type='date' />
            </Col>
            <Col>
                <Input field = {form.$('VehicleRegExpDate')} type = 'date' />
            </Col>
        </Row>
       
                <Input field = {form.$('VehicleInfo')} />
                <Input field = {form.$('VehicleImage')} />        

            <Button className="form-submit" variant = "success" onClick = {form.onSubmit}>Submit</Button>
            <p>{form.error}</p>
    </Form>

    )
}); 
    
export default EditVehicleForm;