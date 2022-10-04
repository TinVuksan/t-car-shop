import React, {useState} from 'react'
import store from '../../Stores/Store'
import {motion} from 'framer-motion'
import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'
import ReactPaginate from 'react-paginate'
import { observer } from 'mobx-react'


 function VehicleCards() {
    const [pageNumber, setPageNumber] = useState(0)

    const vehiclesPerPage = 3;
    const pagesVisited = pageNumber * vehiclesPerPage;
    const pageCount = Math.ceil(store.vehicle.length / vehiclesPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
       
    return(
        
        <>

        {store.vehicle
        .filter((vehicle) => vehicle.VehicleMake.toLocaleLowerCase().includes(store.filter.toLocaleLowerCase())) 
        .sort((a,b) => a.VehicleMake > b.VehicleMake ? 1 : -1)
        .slice(pagesVisited, pagesVisited + vehiclesPerPage)
        .map((vehicle) => 
                <motion.div className = "card-animated" whileHover = {{scale:1.1}} >
                    <Card className="card bg-light" key={vehicle.id} onClick = {() => {console.log('Boop boop')}} >
                     <Card.Img className = "card-image" variant = "top" src = {vehicle.VehicleImage} alt = {vehicle.VehicleImage} />
                     <Card.Body>
                         <Card.Title>{vehicle.VehicleMake} {vehicle.VehicleModel}</Card.Title>
                         <Card.Text>
                             {vehicle.VehicleInfo}
                         </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                     <Button variant="dark">See details</Button>
                     </Card.Footer>
                     </Card>
                </motion.div>
        )}
        
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
        </>

    );
 
    

}

export default observer(VehicleCards);

