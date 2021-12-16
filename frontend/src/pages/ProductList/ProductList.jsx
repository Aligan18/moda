import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
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




    return (
        <div>
            <MyNavbar/>
            <FilterContainer sort={''} filter={filter} setFilter={setFilter}/>
            <Products category={category} filter={filter}/>
            <Footer/>

        </div>
    )
}

export default ProductList
