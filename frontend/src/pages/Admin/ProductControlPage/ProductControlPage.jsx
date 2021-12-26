import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import List from '../../../components/List/List'
import Dashboard from '../Dashboard/Dashboard'
import InputNavbar from '../../../components/Navbar/NavbarComponents/InputNavbar'
import { useHistory } from 'react-router-dom'
import {routerPaths} from '../../../router/router'

import classes from './ProductControlPage.module.css'

const ProductControlPage = () => {
    const history = useHistory()
   
    const [value, setValue] = useState('')
  
    const handleClick=()=>{
      

    }
    const EditButton=(product)=>{
        history.push(routerPaths.ADMIN_PRODUCT_INFO + product._id)
    }

    const productItems =[
        {
            title:"Крем",
            info:"2000",
            status:"вналичие",
            counter:"20",
        },
        {
            title:"Крем",
            info:"2000",
            status:"вналичие",
            counter:"20",
        },
        {
            title:"Крем",
            info:"2000",
            status:"вналичие",
            counter:"20",
        },
        

    ]



    return (
        <div>
            <Dashboard/>
           
            <Container>
                <InputNavbar value={value} setValue={setValue} handleClick={handleClick} classes={classes}/>
                <List  productItems={productItems} EditButton={EditButton} />
            </Container>
        </div>
    )
}

export default ProductControlPage
