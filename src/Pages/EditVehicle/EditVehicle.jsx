import "../AddVehicle/VehicleForm.css"
import Navbar from "../../Components/Navbar/Navbar"
import { observer } from 'mobx-react'
import EditVehicleForm from "../../Components/Forms/EditVehicleForm"
import EditVehicleValidation from "../../Components/Forms/Validation/EditVehicleValidation"

function EditVehicle() {

    return (
        <>
        <Navbar/>
        <div className="container">
        <div className = "form-container">
        <EditVehicleForm form = {EditVehicleValidation}  />
        </div>
        <div className="image-container">
        <h1><span style={{color:"rgba(0, 38, 255, 0.8)", fontSize:"45px"}}>Edit</span> your vehicle here!</h1>
        </div>
        </div>
        </>
           
    )
}

export default observer(EditVehicle);