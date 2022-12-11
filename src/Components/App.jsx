import { BrowserRouter as Router, Routes,  Route } from "react-router-dom"
import HomePage from "../Pages/HomePage/HomePage"
import AddVehicle from "../Pages/AddVehicle/AddVehicle"
import EditVehicle from "../Pages/EditVehicle/EditVehicle"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path = "/" element = {<HomePage></HomePage>} />
                <Route path = "/Add" element = {<AddVehicle></AddVehicle>} />
                <Route path = "/Edit" element = {<EditVehicle></EditVehicle>} />
            </Routes>
        </Router>   
    )
}