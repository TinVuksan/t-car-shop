import {observer} from 'mobx-react';
import {FloatingLabel, Form} from 'react-bootstrap'

export default observer(({field, type='text', disabled }) => {
return(
    <Form.Group className = "mb-3">
            <FloatingLabel
            label = {field.label}>
            <Form.Control {...field.bind({type, disabled})}         
            />
            </FloatingLabel>
            <p><small className = "validationError">{field.error}</small></p>
    </Form.Group>
    
)
});