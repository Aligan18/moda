import React from 'react'
import { Col, Badge} from "react-bootstrap"
import {Link} from "react-router-dom"
import { routerPaths } from '../../../router/router'


const LinksNavbar = ({classes}) => {
    return (
        <div className={classes.right}>
            <Link className={classes.link} to={routerPaths.LOGIN}>SIGN IN</Link>
            <Link className={classes.link} to={routerPaths.REGISTER}>REGISTRATION</Link>
            <div>
            <Link className={classes.link_icon} to={routerPaths.CART}><i className="fas fa-shopping-cart"></i></Link>
            <Badge className={classes.link_badge} bg="secondary">9</Badge>
            </div>
        </div>
    )
}

export default LinksNavbar
