import { BrowserRouter as Router, Routes,  Route } from "react-router-dom"
import HomePage from './HomePage/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path = "/" element = {<HomePage></HomePage>} />
                {/* TO BE ADDED */}
                {/* ... */} 
                {/*<Route path = "/AddVehicle" element = {<AddVehicle></AddVehicle>} /> */}
                {/*<Route path = "/EditVehicle" element = {<EditVehicle></EditVehicle>} /> */}
                {/* ... */}
            </Routes>
        </Router>
        </>
    )
}