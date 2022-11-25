import React from "react"
import Dropdown from 'react-bootstrap/Dropdown'
import getStore from '../../Stores/GetVehicleStore'
import {observer} from 'mobx-react'


function Sort() {
    return (
        <Dropdown className="navbar-sort">
                <Dropdown.Toggle variant="dark">
                        {/* {getStore.sort == "asc" ? "Ascending" : "Descending"} */}
                        Sort vehicles
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick= {() => getStore.setSort('asc')}>A-Z</Dropdown.Item>
                    <Dropdown.Item onClick= {() => getStore.setSort('desc')}>Z-A</Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
    )
    
}

export default observer(Sort);



