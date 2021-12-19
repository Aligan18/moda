import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import MyNavbar from '../../components/Navbar/MyNavbar'
import Footer from '../../components/Footer/Footer'
import AboutProduct from '../../components/AboutProduct/AboutProduct'

const Product = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [product, setProduct] = useState({})
    console.log(id)

    useEffect(() => {
       const getProductById = async () =>{
            try {
                const res = await axios.get(`${process.env.REACT_APP_STATIC_LOC}api/product/find/${id}`)
            console.log(res)
                setProduct(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProductById()

    }, [id])


    return (
        <div>
            <MyNavbar/>
            <AboutProduct product={product} />
            <Footer/>
        </div>
    )
}

export default Product
