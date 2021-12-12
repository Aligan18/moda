import React from 'react'
import MyNavbar from '../../components/Navbar/MyNavbar'
import Slider from '../../components/Slider/Slider'
import Cotegories from '../../components/Cotegories/Cotegories'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (<div className="d-block">

            <MyNavbar/>
            <Slider/>
            <Cotegories/>
            <Products/>
            <Footer/>
       </div>
    )
}

export default Home
