import React from 'react'
import {  InputGroup, FormControl, Button } from "react-bootstrap"




const InputNavbar = ({classes, value, setValue,handleClick}) => {
    

   

    
    

    return (
    <div className={classes.left}>
       
        <InputGroup className={classes.input}>
            <FormControl
            value={value}
            onChange={(event)=>setValue(event.target.value)}
            placeholder="Поиск"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button onClick={handleClick} variant="outline-secondary" id="button-addon2">
            <i className="fas fa-search"></i>
            </Button>
        </InputGroup> 
    </div>
    )
}

export default InputNavbar
