import './HomePage.css'
import Navbar from '../Navbar/Navbar'
import VehicleCards from '../VehicleCards/VehicleCards'
import store from '../../Stores/Store'
export default function HomePage() {
    console.log(store.vehicle);
    return(
        <>
        <Navbar />
        <div className="card-container">
        <VehicleCards />
        </div> 
        </>
        
    ) 
}
