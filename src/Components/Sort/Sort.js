import React from "react"
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import FormSelect from 'react-bootstrap/FormSelect'
import store from "../../Stores/Store"
import {observer} from 'mobx-react'

function Sort() {

    
    return (
        <>
        <FloatingLabel
        controlId = "filterInput"
        label = "Sort"
        className = "navbar-sort"
        >
            <FormSelect aria-label="Default select example" onChangeCapture = {(e) => store.setSort(e.target.value)}>
                <option>&#128153; Još ne radi, ali bude &#128153;</option>
                <option value={true}>Alphabetical descend (A-Z)</option>
                <option value={false}>Alphabetical ascend (Z-A)</option>
            </FormSelect>
        </FloatingLabel>
        </>
    )
}

export default observer(Sort)