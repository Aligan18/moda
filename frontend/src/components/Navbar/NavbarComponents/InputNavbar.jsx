import React, { useState,  } from 'react'
import {  InputGroup, FormControl, Button } from "react-bootstrap"

import {useDispatch, useSelector} from 'react-redux'
import {changeSearchItems} from '../../../redux/reducers/searchReducer'

import {useHistory} from 'react-router-dom'
import {routerPaths} from '../../../router/router'




const InputNavbar = ({classes}) => {
    const dispatch = useDispatch()

    const [value, setValue] = useState('')
    const history = useHistory()

    const handleClick=()=>{
        dispatch(changeSearchItems({value}))
        history.push(routerPaths.SEARCH_PRODUCTS )
    }

    

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
