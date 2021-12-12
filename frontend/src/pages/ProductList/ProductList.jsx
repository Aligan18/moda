import React from 'react'
import FilterContainer from '../../components/FilterContainer/FilterContainer'
import Footer from '../../components/Footer/Footer'
import MyNavbar from '../../components/Navbar/MyNavbar'
import Products from '../../components/Products/Products'

const ProductList = () => {
    return (
        <div>
            <MyNavbar/>
            <FilterContainer/>
            <Products/>
            <Footer/>

        </div>
    )
}

export default ProductList
