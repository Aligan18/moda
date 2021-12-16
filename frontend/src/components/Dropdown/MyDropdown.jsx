import React from 'react'
import {Dropdown , DropdownButton} from 'react-bootstrap'

const MyDropdown = ({items, classes,name, title, filter, setFilter}) => {

    const handleFilters =(event)=>{
        const targetValue = event.target.outerText
       
        setFilter({
            ...filter ,
            [name]:targetValue
        })
    }

    return (
       
             <DropdownButton
                className={classes.dropdown}
                variant='outline-secondary'
                title={title}
            >
                    {items.map((item, index )=>(
                        <Dropdown.Item key={index} onClick={handleFilters} >{item}</Dropdown.Item>
                    ))} 

            </DropdownButton>
        
    )
}

export default MyDropdown
