import React from 'react'
import {Dropdown , DropdownButton} from 'react-bootstrap'

const MyDropdown = ({colors, classes, value, setValue}) => {
    return (
       
             <DropdownButton
                className={classes.dropdown}
                variant='outline-secondary'
                title={value}
            >
                    {colors.map((color, index )=>(
                        <Dropdown.Item key={index} onClick={(event)=>setValue(event.target.outerText)} >{color}</Dropdown.Item>
                    ))} 

            </DropdownButton>
        // s
    )
}

export default MyDropdown
