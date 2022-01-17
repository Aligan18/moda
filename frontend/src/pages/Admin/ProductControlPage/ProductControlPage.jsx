import React,{useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import List from '../../../components/List/List'
import Dashboard from '../Dashboard/Dashboard'
import InputNavbar from '../../../components/Navbar/NavbarComponents/InputNavbar'
import { useHistory } from 'react-router-dom'
import {routerPaths} from '../../../router/router'

import fetchProduct from '../../../tools/fetchProduct'

import classes from './ProductControlPage.module.css'

const ProductControlPage = () => {
    const history = useHistory()
    const [publicLists,setPubliscLists]= useState([])
    const [value, setValue] = useState('')
  
    const searchButton=()=>{
      

    }

    




    const actions = [
        { icon: "far fa-edit",
        handleClick: (product)=>{ history.push(routerPaths.ADMIN_PRODUCT_INFO + product._id)}},
        { icon: "fas fa-trash",
        handleClick: async(list,user)=>{
                    await fetchProduct.deletById(list._id, user.accessToken)
                    getAllProducts()
                    }}
    ]

    const publicTitles = [

        false  ,   
        "title",
       "categories",
       "price",
       "inStock",
       "createdAt",
       "action"
      
      

    ]
    const getAllProducts=async()=>{
        const res = await fetchProduct.getAll() 
        res && setPubliscLists(res)
    }

    useEffect(() => {
        
       
       getAllProducts()

    },[])



    

    const privateTitles =[
        'img',
        'desc',
        

    ]



    return (
        <div>
            <Dashboard/>
           
            <Container>
                <h2>ПРОДУКТЫ</h2>
                <InputNavbar value={value} setValue={setValue} handleClick={searchButton} classes={classes}/>
                <List   publicLists={publicLists} 
                        publicTitles={publicTitles} 
                        privateTitles={privateTitles} 
                        actions={actions}/>
               
            </Container>
        </div>
    )
}

export default ProductControlPage
