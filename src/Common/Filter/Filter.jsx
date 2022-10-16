import React from "react"
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import FormControl from 'react-bootstrap/FormControl'
import store from '../../Stores/GetVehicleStore'
import {observer} from 'mobx-react'

function Filter() {
    return (
        
        <FloatingLabel
        controlId = "filterInput"
        label = "Search"
        className = "navbar-filter"
        >
            <FormControl 
            type = "text" 
            placeholder = "Audi, BMW, Mercedes..." 
            value = {store.filter}
            onChange = {(e) => store.setFilter(e.target.value)}
            />
        </FloatingLabel>
        
    )
}

export default observer(Filter)
