import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import { Container, Row } from 'react-bootstrap'
import InfoEdit from '../../../components/InfoEdit/InfoEdit'
import InfoMini from '../../../components/InfoMini/InfoMini'
import classes from './ProductEdit.module.css'
import ItemsProducts from '../../../components/Products/components/ItemsProducts'
import productClasses from '../../../components/Products/Products.module.css'

const ProductEdit = () => {
    


    const product = {

        _id:'61bda67f77f569ed2ca4444e',
        title :"Cпонжи для нанесения макияжа....",
        desc:"Самые популярные спонжи для нанесения макияжа, ведь они не уступают по...",
        img:"e0434674-c5fe-43ca-8c6c-f19c3dda3753.jpg",
        
        price: 2000,
        inStock:true,
        createdAt:"2021-11-18T09:14:39.220+00:00",
        updatedAt: "2021-12-18T09:14:39.220+00:00",
        
    }

    

    return (
        <div>
             <Dashboard/>
             <Container>
                <Row>
                    <InfoMini classes={classes} info={product}/>
                    <ItemsProducts product={product} classes={productClasses} />
                </Row>
                <InfoEdit/>
             </Container>
            
        </div>
    )
}

export default ProductEdit
