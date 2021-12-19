import React,{useEffect,useState} from 'react'
import axios from 'axios'

import MyNavbar from '../../components/Navbar/MyNavbar'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    const [products , setProducts]= useState([])

    useEffect(()=>{
        const getAllProducts = async () =>{
            const res = await axios.get(`${process.env.REACT_APP_STATIC_LOC}api/product/find/`)
            setProducts(res.data)
        }
        getAllProducts()
    },[])

    return (<div className="d-block">

            <MyNavbar/>
            <Slider/>
            <Categories/>
            <Products products={products}/>
            <Footer/>
       </div>
    )
}

export default Home
