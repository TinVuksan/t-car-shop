import "./VehicleForm.css"
import Navbar from "../../Components/Navbar/Navbar"
import { observer } from 'mobx-react'
import AddVehicleForm from "../../Components/Forms/AddVehicleForm"
import AddVehicleValidation from "../../Components/Forms/Validation/AddVehicleValidation"

function AddVehicle() {

    return (
        <>
        <Navbar/>
        <div className="container">
        <div className = "form-container">
        <AddVehicleForm form = {AddVehicleValidation}  />
        </div>
        <div className="image-container">
        <h1><span style={{color:"rgba(0, 38, 255, 0.8)", fontSize:"45px"}}>Add</span> new vehicle here!</h1>
        </div>
        </div>
        </>
           
    )
}

export default observer(AddVehicle);
