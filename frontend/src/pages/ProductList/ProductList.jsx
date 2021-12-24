import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {publicRequest} from '../../axios/requestMethods'

import {useSelector} from 'react-redux'

import FilterContainer from '../../components/FilterContainer/FilterContainer'
import Footer from '../../components/Footer/Footer'
import MyNavbar from '../../components/Navbar/MyNavbar'
import Products from '../../components/Products/Products'

// tools
import Filter from '../../tools/Filter'

const ProductList = () => {
    const searchValue = useSelector(state => state.search.searchValue)

    const location = useLocation()
    const methodSearch = location.pathname.split('/')[2]
    const category = location.pathname.split('/')[3]

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
                const res = await publicRequest.get(methodSearch==="category"?
                                                `api/product/category/find/?category=${category}`
                                                :`api/product/search/find/`)
            
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }  
       }
       getProducts()
    }, [category])

    // filter doesnt work
    useEffect(()=>{
        let data={}
        let filtredArray =[]
        let trashArray =['для','в', 'против', 'и' ]
        let searchWords = searchValue.split(' ')

        trashArray.map(word => {
            
            let index =searchWords.indexOf(word)
            index>-1 && searchWords.splice(index,1)

        })

        if (searchValue){

            searchWords.map(word=>{
                let array =products.filter(product =>product.desc.includes(word))
                filtredArray  = filtredArray.concat(array)
                filtredArray.forEach(function(item) {
                    data[item._id] = item;
                    
                  });
            })

            let result= Object.values(data)
            setFiltredProducts(result)
        }

        else{
            setFiltredProducts(products)
        }

    },[category, products, filter, searchValue ])

    // sort 
    useEffect(()=>{
       Filter.ByNewAndСheaper(sort.first, setFiltredProducts,filtredProducts )

    },[sort])

  

    return (
        <div>
            <MyNavbar/>
            <FilterContainer sort={sort} search={searchValue} setSort={setSort} filter={filter} setFilter={setFilter}/>
            
            <Products products={filtredProducts}/>
            <Footer/>

        </div>
    )
}

export default ProductList
