import { BrowserRouter as Router, Routes,  Route } from "react-router-dom"
import HomePage from './HomePage/HomePage'
import AddVehicle from '../Components/AddVehicle/AddVehicle'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path = "/" element = {<HomePage></HomePage>} />
                <Route path = "/Add" element = {<AddVehicle></AddVehicle>} />
                {/* TO BE ADDED */}
                {/* ... */} 
                
                {/*<Route path = "/EditVehicle" element = {<EditVehicle></EditVehicle>} /> */}
                {/* ... */}
            </Routes>
        </Router>
        </>
    )
}