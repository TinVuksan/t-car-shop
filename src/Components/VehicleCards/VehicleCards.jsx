import React from 'react'
import './VehicleCards.css'
import getStore from '../../Stores/GetVehicleStore'
import {motion} from 'framer-motion'
import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react'
import EditModal from '../Modal/EditModal'
import editStore from '../../Stores/EditVehicleStore'
 function VehicleCards() {

    function editVehicle(vehicle) {
        editStore.setVehicle(vehicle);
    }

    return(
        
        <>
        <Button variant="dark" className = "prevPage" onClick = {() => {getStore.setPage(getStore.page -1)}}>&lt;</Button>
        {getStore.filteredVehicles
        .map((vehicle) => 
                <motion.div key={vehicle.id} className = "card-animated" whileHover = {{scale:1.05}} onClick = {() => {editVehicle(vehicle)}}>
                    <Card className="card bg-light"  onClick = {editStore.showModal} >
                     <Card.Img className = "card-image" variant = "top" src = {vehicle.VehicleImage} alt = "Vehicle image" />
                     <Card.Body>
                         <Card.Title>{vehicle.VehicleMake} {vehicle.VehicleModel}</Card.Title>
                         <Card.Text>
                             {vehicle.VehicleInfo}
                         </Card.Text>
                     </Card.Body>
                     
                     </Card>
                     
                </motion.div>
        )}
        <Button variant="dark" className = "nextPage" onClick = {() => {getStore.setPage(getStore.page + 1)}}>&gt;</Button>
        <EditModal />
        </>

    );
 
    

}

export default observer(VehicleCards);

