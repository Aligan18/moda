import React,{useEffect,useState} from 'react'

import {publicRequest} from '../../axios/requestMethods'

import MyNavbar from '../../components/Navbar/MyNavbar'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    const [products , setProducts]= useState([])

    useEffect(()=>{
        const getAllProducts = async () =>{
            const res = await publicRequest.get(`api/product/category/find/`)
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
