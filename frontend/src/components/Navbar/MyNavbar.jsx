import React from 'react'
import {Row} from "react-bootstrap"

import classes from "./Navbar.module.css"

import InputNavbar from './NavbarComponents/InputNavbar'
import LogoNavbar from './NavbarComponents/LogoNavbar'
import LinksNavbar from './NavbarComponents/LinksNavbar'

const MyNavbar = () => {
    return (
            <>
            <div className={classes.navbar}>
                <InputNavbar classes={classes}/>
                <LogoNavbar classes={classes}/>
                <LinksNavbar classes={classes}/>
            </div>
            <hr className={classes.hr}/>
            </>

       
        
    )
}

export default MyNavbar
