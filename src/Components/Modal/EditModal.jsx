import React from "react"
import Button from "react-bootstrap/Button"
import {Modal,Col, Row,FloatingLabel, Form} from 'react-bootstrap'
import editStore from '../../Stores/EditVehicleStore'
import { observer } from 'mobx-react'
import {action} from 'mobx'

function EditModal() {
    return (
    <Modal show={editStore.modal} onHide={editStore.showModal}>
    <Modal.Header closeButton>
        <Modal.Title>Vehicle details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
        <FloatingLabel controlId="floatingInput" label="Vehicle ID" className="mb-3" >
            <Form.Control type="text" placeholder="Vehicle ID" name="id" value = {editStore.vehicle.id || ""} disabled />
        </FloatingLabel>
        <Row>
            <Col>
                <Form.Group className="mb-3" controlId="select1">
                    <FloatingLabel controlId="floatingInput" label="VehicleMake" className="mb-3" >
                        <Form.Control type="text" placeholder="VehicleMake" name="VehicleMake" value = {editStore.vehicle.VehicleMake || ""} onChange = {action(e => {editStore.vehicle.VehicleMake = e.target.value})}/>
                    </FloatingLabel>                 
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-3" controlId="select2">
                    <FloatingLabel controlId="floatingInput" label="VehicleModel" className="mb-3" >
                        <Form.Control type="text" placeholder="VehicleModel" name="VehicleModel" value = {editStore.vehicle.VehicleModel || ""} onChange = {action(e => {editStore.vehicle.VehicleModel = e.target.value})}/>
                    </FloatingLabel>                               
                </Form.Group>
            </Col> 
        </Row>                   
        <Form.Group className="mb-3" controlId="select3">
            <FloatingLabel controlId="floatingInput" label="VehicleImage" className="mb-3" >
                <Form.Control type="text" placeholder="VehicleImage" name="VehicleImage" value = {editStore.vehicle.VehicleImage || ""} onChange = {action(e => {editStore.vehicle.VehicleImage = e.target.value})}/>
            </FloatingLabel>            
        </Form.Group>

        <Form.Group className="mb-3" controlId="select3">
            <FloatingLabel controlId="floatingInput" label="VehicleInfo" >
                <Form.Control as="textarea" rows={2} placeholder="VehicleInfo" name="VehicleInfo" value = {editStore.vehicle.VehicleInfo || ""} onChange = {action(e => {editStore.vehicle.VehicleInfo = e.target.value})}/>
            </FloatingLabel>             
        </Form.Group>

        <Form.Group className="mb-3" controlId="select3">
            <FloatingLabel controlId="floatingInput" label="VehiclePower" className="mb-3" >
                <Form.Control type="number" placeholder="VehiclePower" name="VehiclePower" value = {editStore.vehicle.VehiclePower || ""} onChange = {action(e => {editStore.vehicle.VehiclePower = e.target.value})}/>
            </FloatingLabel>            
        </Form.Group>

        <Form.Group className="mb-3" controlId="select3">
            <FloatingLabel controlId="floatingInput" label="VehicleRegDate" className="mb-3" >
                <Form.Control type="text" placeholder="VehicleRegDate" name="VehicleRegDate" value = {editStore.vehicle.VehicleRegDate || ""} onChange = {action(e => {editStore.vehicle.VehicleRegDate = e.target.value})}/>
            </FloatingLabel>            
        </Form.Group>

        <Form.Group className="mb-3" controlId="select3">
            <FloatingLabel controlId="floatingInput" label="VehicleRegExpDate" className="mb-3" >
                <Form.Control type="text" placeholder="VehicleRegExpDate" name="VehicleRegExpDate" value = {editStore.vehicle.VehicleRegExpDate || ""} onChange = {action(e => {editStore.vehicle.VehicleRegExpDate = e.target.value})}/>
            </FloatingLabel>            
        </Form.Group>
        
        </Form> 
    </Modal.Body>
    <Modal.Footer>
        <Button variant="danger" onClick = {action(() => {editStore.showModal()})}>Close</Button>
        <Button variant="success" onClick = {action(() => {editStore.handleSubmit(editStore.vehicle)})}>Save changes</Button>                   
    </Modal.Footer>
    </Modal>)
    
}

export default observer(EditModal);