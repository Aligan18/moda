import React from 'react'
import { Col, InputGroup, FormControl, Button } from "react-bootstrap"

const InputNavbar = ({classes}) => {
    return (
    <div className={classes.left}>
       
        <InputGroup className={classes.input}>
            <FormControl
            placeholder="Поиск"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
            <i className="fas fa-search"></i>
            </Button>
        </InputGroup> 
    </div>
    )
}

export default InputNavbar
