import React from 'react'
import {  Badge} from "react-bootstrap"
import {Link} from "react-router-dom"
import { routerPaths } from '../../../router/router'

import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {logout} from '../../../redux/reducers/userReducer'


const LinksNavbar = ({classes}) => {
    const quantity = useSelector(state => state.cart.products.length)
    const auth = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()

    const Logout =()=>{
        dispatch(logout())
    }

    return (
        <div className={classes.right}>
            {auth ? 
                  <h6 onClick={Logout} className={classes.link}>ВЫЙТИ</h6>
                :
                <><Link className={classes.link} to={routerPaths.LOGIN}>ВОЙТИ</Link>
                  <Link className={classes.link} to={routerPaths.REGISTER}>РЕГИСТРАЦИЯ</Link></>
            }
            <div>
            <Link className={classes.link_icon} to={routerPaths.CART}><i className="fas fa-shopping-cart"></i></Link>
            <Badge className={classes.link_badge} bg="secondary">{quantity}</Badge>
            </div>
        </div>
    )
}

export default LinksNavbar
