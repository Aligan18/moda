import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'

import {publicRequest} from '../../axios/requestMethods'

import MyNavbar from '../../components/Navbar/MyNavbar'
import Footer from '../../components/Footer/Footer'
import AboutProduct from '../../components/AboutProduct/AboutProduct'


import { useDispatch } from 'react-redux'
import CartTools from "../../tools/cartTools"

const Product = () => {
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
        CartTools.addToCart({product, quantity, dispatch , id })
    }

    return (
        <div>
            <MyNavbar/>
            <AboutProduct product={product} setAmount={setQuantity}  amount={quantity} addToCart={addToCart} />
            <Footer/>
        </div>
    )
}

export default Product
