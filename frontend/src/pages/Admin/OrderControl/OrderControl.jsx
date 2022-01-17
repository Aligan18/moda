import React,{useState,useEffect} from 'react'
import Dashboard from '../Dashboard/Dashboard'
import List from '../../../components/List/List'
import InputNavbar from '../../../components/Navbar/NavbarComponents/InputNavbar'
import classes from './OrderControl.module.css'
import { Container } from 'react-bootstrap'

import { useSelector } from 'react-redux'

import fetchOrder from '../../../tools/fetchOrder'


const OrderContral = () => {

    const user = useSelector(state => state.user.currentUser)

    const publicTitles = [

        false  ,   
        "name",
       "phone",
       "total",
       "adress",
       "status",
       "createdAt",
       "action"
      
      

    ]
   
    const [publicLists, setPubliscLists]= useState([]) 



    useEffect(() => {
        const fetchAllOrders =async()=>{
            const orders= await fetchOrder.getAll(user.accessToken)
            console.log('orders',orders)
            orders && setPubliscLists(orders)
        }
        fetchAllOrders()
    },[])
    

    const actions = [
        { icon: "fas fa-hand-holding-usd",
        handleClick: ()=>{ console.log('редактировать')}},
        { icon: "fas fa-trash",
        handleClick: ()=>{console.log('удалить')}}
    ]

    const privateTitles =['img','title','price', "inStock", 'quantity']

    const privateListKey = "products"
 
    
   
    const [value, setValue] = useState('')
  
    const handleClick=()=>{
      

    }

    
    return (
        <div>
            <Dashboard/>
            <Container>
                <h2>ЗАКАЗЫ</h2>
                <InputNavbar value={value} setValue={setValue} handleClick={handleClick} classes={classes}/>
           
            
                <List   publicLists={publicLists} 
                        publicTitles={publicTitles} 
                        privateListKey={privateListKey}
                        privateTitles={privateTitles}
                        actions={actions}
                       
                         />
            </Container>
        </div>
    )
}

export default OrderContral
