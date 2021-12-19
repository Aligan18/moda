import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import FilterContainer from '../../components/FilterContainer/FilterContainer'
import Footer from '../../components/Footer/Footer'
import MyNavbar from '../../components/Navbar/MyNavbar'
import Products from '../../components/Products/Products'

const ProductList = () => {
    const location = useLocation()
    const category = location.pathname.split('/')[2]
    const [filter , setFilter] = useState({
        color:"color",
        size:"size",
    })
    const [sort, setSort]=useState("")
    const [products, setProducts ] = useState([])
    const [filtredProducts, setFiltredProducts ] = useState([])


    useEffect(() => {
       const getProducts = async() =>{
            try {
                console.log(category)
                const res = await axios.get(category?
                                                `${process.env.REACT_APP_STATIC_LOC}api/product/find/?category=${category}`
                                                :`${process.env.REACT_APP_STATIC_LOC}api/product/find/`)
            
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }  
       }
       getProducts()
    }, [category])
    
    useEffect(()=>{
        category && setFiltredProducts(
            products
        )
    },[category, products, filter ])



    return (
        <div>
            <MyNavbar/>
            <FilterContainer sort={sort} setSort={setSort} filter={filter} setFilter={setFilter}/>
            <Products products={filtredProducts}/>
            <Footer/>

        </div>
    )
}

export default ProductList
