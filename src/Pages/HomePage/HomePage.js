import './HomePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import VehicleCards from '../../Components/VehicleCards/VehicleCards'
import getStore from '../../Stores/GetVehicleStore'
import { observer } from 'mobx-react'
 function HomePage() {
    return(
        <>
        <Navbar />
        <div className="card-container">
        <VehicleCards />
        <h3 className="pageCount">Current page: {getStore.properties.page}/{getStore.maxPageNum}</h3>
        </div> 
        </>
    ) 
}

export default observer(HomePage); 
