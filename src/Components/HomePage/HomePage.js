import {useEffect, useState} from 'react'
import Axios from 'axios'
export default function HomePage() {
    useEffect(() => {
        getData()
    }, [])
        const [vehicles, setVehicles] = useState([])
        const getData = () => {
        var params = new URLSearchParams();

         params.append('VehicleMake', 'BMW');
         params.append('VehicleModel', 'X3');
         Axios.get('https://api.baasic.com/beta/t-car-shop/resources/Vehicles')
         .then((res) => {
			
            const Array = res.data.item
            console.log(Array)
            setVehicles(Array)
			
		})
        .catch((error) => {
            console.log(error)
        })
    }

    
    return(
        <>
        <ul>
        {vehicles.map(vehicle => <li key = {vehicle.id}>{vehicle.VehicleModel}</li>)}
        </ul>
        
        </>
    ) 
}