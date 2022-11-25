import React from 'react'
import './VehicleCards.css'
import getStore from '../../Stores/GetVehicleStore'
import {motion} from 'framer-motion'
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react'
import EditModal from '../Modal/EditModal'
import editStore from '../../Stores/EditVehicleStore'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
 function VehicleCards() {

    function editVehicle(vehicle) {
        editStore.setVehicle(vehicle);
    }
    return(
        
        <>
        {console.log(getStore.properties)}
        { getStore.page !== 1 &&
        <ArrowBackIosNewIcon fontSize="large" className="prevPage" onClick = {() => {getStore.setPage(getStore.page -1)}}/>
        }  
        
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
        {getStore.properties.page !== getStore.maxPageNum &&
        <ArrowForwardIosIcon fontSize="large" className="prevPage" onClick = {() => {getStore.setPage(getStore.page + 1)}} />
        }
        <EditModal />
        
        </>

    );
 
    

}

export default observer(VehicleCards);

