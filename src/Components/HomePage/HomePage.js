import './HomePage.css'
import Navbar from '../Navbar/Navbar'
import VehicleCards from '../VehicleCards/VehicleCards'
export default function HomePage() {

    return(
        <>
        <Navbar />
        <div className="card-container">
        <VehicleCards />
        </div> 
        </>
        
    ) 
}
