import React from 'react'
import { Link } from 'react-router-dom'

import { routerPaths } from '../../../router/router'

const LogoNavbar = ({classes}) => {
    return (
    <div className={classes.center}>
        <Link className={classes.logo}to={routerPaths.HOME}>
           <h1 className={classes.logo_text}>MODA.</h1>
        </Link>
    </div>
    )
}

export default LogoNavbar
