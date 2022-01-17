import React, {useState, useEffect}from 'react'
import Dashboard from '../Dashboard/Dashboard'
import List from '../../../components/List/List'
import InputNavbar from '../../../components/Navbar/NavbarComponents/InputNavbar'
import { Container } from 'react-bootstrap'

import fetchUser from '../../../tools/fetchUser'

import { useSelector } from 'react-redux'

import classes from './UserControl.module.css'

const UserControl = () => {

    const user = useSelector(state => state.user.currentUser)

    const [publicLists, setPublicLists]= useState([])

    const getAllUsers =async() =>
            setPublicLists(await fetchUser.getAll(user.accessToken)
    )


    useEffect(() => {
        getAllUsers()
        
    })

    const publicTitles = [

        false  ,  
        "login", 
        "name",
        "surname",
        "email",
        "status",
        "total",
        "createdAt",
      

    ]

    const privateTitles = false

   
    const [value, setValue] = useState('')
  
    const handleClick=()=>{
      

    }



    return (
        <div>
         <Dashboard/>
            <Container>
                <h2>ПОЛЬЗОВАТЕЛИ</h2>
                <InputNavbar value={value} setValue={setValue} handleClick={handleClick} classes={classes}/>
           
            
            <List   publicLists={publicLists} 
                    publicTitles={publicTitles} 
                    privateTitles={privateTitles}  />
            </Container>
            
        </div>
    )
}

export default UserControl
