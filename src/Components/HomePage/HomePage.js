import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './HomePage.css'
import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'
import logo from '../../Common/Images/mono_logo.png'
import ReactPaginate from 'react-paginate'
import Navbar from '../Navbar/Navbar'

export default function HomePage() {

    useEffect(() => {
        GetData();
    },[])

    const GetData = () => {
        Axios.get('https://api.baasic.com/beta/t-car-shop/resources/Vehicles/')
         .then((res) => {
			
            const Array = res.data.item
            setVehicles(Array)
			
		})
        .catch((error) => {
            console.log(error)
        })
    }

    const [vehicles, setVehicles] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    const vehiclesPerPage = 4;
    const pagesVisited = pageNumber * vehiclesPerPage;
    const pageCount = Math.ceil(vehicles.length / vehiclesPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    const displayVehicles = vehicles
    .slice(pagesVisited, pagesVisited + vehiclesPerPage)
    .map((vehicle) => {
        return(
            <Card className="card bg-light" key={vehicle.id}>
            <Card.Img className = "card-image" variant = "top" src = {logo} />
            <Card.Body>
                <Card.Title>{vehicle.VehicleMake} {vehicle.VehicleModel}</Card.Title>
                <Card.Text>
                    To see more info about this vehicle, click the button below
                </Card.Text>
                <Button variant="dark">See details</Button>
            </Card.Body>
            </Card>
        );
            
        
    });

    

    
         
   
    return(
        <>
        <Navbar />
     
        <div className="card-container">
        {displayVehicles}
        <ReactPaginate
        previousLabel = {'Previous'}
        nextLabel = {'Next'}
        pageCount = {pageCount}
        onPageChange = {changePage}
        containerClassName = {"paginationButtons"}
        previousLinkClassName = {"btn btn-primary"}
        nextLinkClassName = {"btn btn-primary"}
        activeClassName = {"paginationActive"}
        pageLinkClassName = {"btn btn-primary"}
        />
        </div>
        
 
        
 
 
        
      
      
        
        
        </>
        
    ) 
}