import React from 'react'
import {  Alert} from 'react-bootstrap';

function MensajeAlerta({variant, children}) {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

export default MensajeAlerta