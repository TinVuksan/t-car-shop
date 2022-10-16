import './HomePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import VehicleCards from '../../Components/VehicleCards/VehicleCards'
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
