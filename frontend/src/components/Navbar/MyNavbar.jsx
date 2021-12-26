import React , { useState,  } from 'react'


import {useDispatch} from 'react-redux'
import {changeSearchItems} from '../../redux/reducers/searchReducer'

import {useHistory} from 'react-router-dom'
import {routerPaths} from '../../router/router'


import classes from "./Navbar.module.css"

import InputNavbar from './NavbarComponents/InputNavbar'
import LogoNavbar from './NavbarComponents/LogoNavbar'
import LinksNavbar from './NavbarComponents/LinksNavbar'



const MyNavbar = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const history = useHistory()
    const handleClick=()=>{
        dispatch(changeSearchItems({value}))
        history.push(routerPaths.SEARCH_PRODUCTS )
    }



    return (
            <>
            <div className={classes.navbar}>
                <InputNavbar value={value} setValue={setValue} handleClick={handleClick} classes={classes}/>
                <LogoNavbar classes={classes}/>
                <LinksNavbar classes={classes}/>
            </div>
            <hr className={classes.hr}/>
            </>

       
        
    )
}

export default MyNavbar
