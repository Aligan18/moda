import React, {useState,useEffect} from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import {publicRequest} from '../../axios/requestMethods'

import MyNavbar from '../../components/Navbar/MyNavbar'
import Footer from '../../components/Footer/Footer'
import AboutProduct from '../../components/AboutProduct/AboutProduct'


import { useDispatch, useSelector} from 'react-redux'
import CartTools from "../../tools/cartTools"


const Product = () => {
    const auth =useSelector(state => state.user.currentUser)
    const history = useHistory()

    const location = useLocation()
    const id = location.pathname.split('/')[2]

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    
    const dispatch = useDispatch()

    useEffect(() => {
       const getProductById = async () =>{
            try {
                const res = await publicRequest.get(`api/product/find/${id}`)
            console.log(res)
                setProduct(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProductById()

    }, [id])

    const addToCart=()=>{

        if(auth){
            CartTools.addToCart({product, quantity, dispatch , id }) }
        else{
            history.push('/login')
        }
    }

    return (
        <div>
            <MyNavbar/>
                <AboutProduct product={product} setAmount={setQuantity}  amount={quantity} handleClick={addToCart} />
            <Footer/>
        </div>
    )
}

export default Product
