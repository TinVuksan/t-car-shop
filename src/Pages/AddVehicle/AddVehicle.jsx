import React from "react"
import "./AddVehicle.css"
import Navbar from "../../Components/Navbar/Navbar"
import { observer } from 'mobx-react'
import AddVehicleForm from "./AddVehicleForm"
import AddVehicleValidation from "./AddVehicleValidation"

function AddVehicle() {

    return (
        <>
        <Navbar/>
        <div className="container">
        <div className = "addForm-container">
        <AddVehicleForm form = {AddVehicleValidation}  />
        </div>
        </div>
        </>
           
    )
}

export default observer(AddVehicle);
