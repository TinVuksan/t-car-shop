import { Link } from 'react-router-dom'
import './VehicleCards.css'
import getStore from '../../Stores/GetVehicleStore'
import {motion} from 'framer-motion'
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react'
import { Button } from 'react-bootstrap'
import editStore from '../../Stores/EditVehicleStore'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
 function VehicleCards() {

    return(
        
        <>
        {console.log(getStore.properties)}
        {getStore.page !== 1 &&
        <ArrowBackIosNewIcon fontSize="large" className="prevPage" onClick = {() => {getStore.setPage(getStore.page -1)}}/>
        }  
        {getStore.filteredVehicles
        .map((vehicle) => 
                <motion.div key={vehicle.id} className = "card-animated" whileHover = {{scale:1.05}}>
                    <Card className="card bg-light">
                     <Card.Img className = "card-image" variant = "top" src = {vehicle.VehicleImage} alt = "Vehicle image" />
                     <Card.Body>
                         <Card.Title><strong>{vehicle.VehicleMake} {vehicle.VehicleModel}</strong></Card.Title>
                         <Card.Text>
                            <br />
                            <strong>Info:</strong> {vehicle.VehicleInfo}<br />
                            <strong>Power:</strong> {vehicle.VehiclePower} kW <br />
                            <strong>Reg date:</strong> {vehicle.VehicleRegDate}
                         </Card.Text>
                     </Card.Body>
                     <Card.Footer className="card-button-container">
                     <Link to = "/Edit"><Button variant = "info" onClick={() => {editStore.setVehicle(vehicle)}}>Edit Vehicle</Button></Link>
                     <Button variant = "dark" onClick = {(e) => {e.stopPropagation(); editStore.deleteVehicle(vehicle.id)}}>Delete vehicle</Button>
                     </Card.Footer>
                     </Card>
                     
                </motion.div>
        )}
        {getStore.properties.page !== getStore.maxPageNum &&
        <ArrowForwardIosIcon fontSize="large" className="prevPage" onClick = {() => {getStore.setPage(getStore.page + 1)}} />
        }
        </>

    );
 
}

export default observer(VehicleCards);

