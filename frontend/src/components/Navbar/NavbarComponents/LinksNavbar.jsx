import React , {useEffect} from 'react'
import {  Badge} from "react-bootstrap"
import {Link} from "react-router-dom"
import { routerPaths } from '../../../router/router'

import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'

import { userCreateRequest} from '../../../axios/requestMethods'

import {cartLogout} from '../../../redux/reducers/cartReducer'
import {logout} from '../../../redux/reducers/userReducer'


const LinksNavbar = ({classes}) => {
    

    

    const user = useSelector(state => state.user.currentUser)
    const amountProducts = useSelector(state => state.cart.amountProducts)
    const auth = useSelector(state => state.user.currentUser)
    const isAdmin = auth && auth.isAdmin
    const products = useSelector(state => state.cart.products)
    
    
    useEffect(() => {
        const updateCart = async () =>{
        
            const userRequest =  userCreateRequest(user.accessToken)
            try {
                await userRequest.put(`/api/cart/find/${user._id}`,{products})
                
            } catch (error) {
                console.log(error)
            }
            
        }
        auth && updateCart()
    },[amountProducts])
    
    


    const dispatch = useDispatch()

    const Logout =()=>{
        dispatch(logout())
        dispatch( cartLogout())
    }

    return (
        <div className={classes.right}>
            {auth ?
                    <>
                        <h6 onClick={Logout} className={classes.link}>ВЫЙТИ</h6>
                        {isAdmin && <Link className={classes.link} to={routerPaths.DASHBOARD}>АДМИН</Link>}  
                    </>
                :
                <><Link className={classes.link} to={routerPaths.LOGIN}>ВОЙТИ</Link>
                  <Link className={classes.link} to={routerPaths.REGISTER}>РЕГИСТРАЦИЯ</Link></>
            }
            <div>
            <Link className={classes.link_icon} to={ routerPaths.CART}><i className="fas fa-shopping-cart"></i></Link>
            <Badge className={classes.link_badge} bg="secondary">{auth && amountProducts}</Badge>
            </div>
        </div>
    )
}

export default LinksNavbar
