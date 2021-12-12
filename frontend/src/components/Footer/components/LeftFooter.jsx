import React from 'react'
import {Link} from 'react-router-dom'
import {routerPaths} from '../../../router/router'

const LeftFooter = ({classes}) => {
    return (
        <div className={classes.left} >
                    <div className={classes.displayFlex}>
                        {/* Title */}
                        <Link className={classes.left_link} to={routerPaths.HOME}>
                            <h1 className={classes.left_logo} >MODA.</h1>
                        </Link>
                        {/* Icons */}
                        <div className={classes.left_socialContainer} >
                            {/*WhatsApp  */}
                            <div className={classes.left_iconBlock} >
                                <i style={{color:"green"}} className={`${classes.left_icon} fab fa-whatsapp`}></i>
                            </div>
                            {/* Instagram */}
                            <div className={classes.left_iconBlock} >
                                <i style={{color:"#E4405F"}} className={`${classes.left_icon} fab fa-instagram`}></i>
                            </div>
                        </div>
                    </div>
                    {/* Desc */}
                    <div className={classes.left_description} >
                        <h5> cupidatat veniam laboris. Labore aliquip magna cupidatat sunt cupidatat cupidatat dolor ut id qui. Quis fugiat enim magna commodo fugiat veniam laboris esse cupidatat anim tempor. Ex mollit ipsum sunt commodo. Amet est ad veniam aliqua adipisicing sunt et et non.</h5>        
                    </div>
                        
            </div>
    )
}

export default LeftFooter
