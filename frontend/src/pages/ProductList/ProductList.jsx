import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {publicRequest} from '../../axios/requestMethods'

import FilterContainer from '../../components/FilterContainer/FilterContainer'
import Footer from '../../components/Footer/Footer'
import MyNavbar from '../../components/Navbar/MyNavbar'
import Products from '../../components/Products/Products'

// tools
import Filter from '../../tools/Filter'

const ProductList = () => {
    const location = useLocation()
    const category = location.pathname.split('/')[2]
    const [filter , setFilter] = useState({
        color:"color",
        size:"size",
    })
    const [sort, setSort]=useState({
        first:"Сортировать"
    })
    const [products, setProducts ] = useState([])
    const [filtredProducts, setFiltredProducts ] = useState([])


    useEffect(() => {
       const getProducts = async() =>{
            try {
                console.log(category)
                const res = await publicRequest.get(category?
                                                `api/product/find/?category=${category}`
                                                :`api/product/find/`)
            
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }  
       }
       getProducts()
    }, [category])
    // filter 
    useEffect(()=>{
        category && setFiltredProducts(
            products
        )
    },[category, products, filter ])

// sort 
    useEffect(()=>{
       Filter.ByNewAndСheaper(sort.first, setFiltredProducts,filtredProducts )

    },[sort])


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
