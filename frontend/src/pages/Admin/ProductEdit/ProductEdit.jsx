import React,{useState} from 'react'
import Dashboard from '../Dashboard/Dashboard'
import { Button, Container, Row } from 'react-bootstrap'

import InfoMini from '../../../components/InfoMini/InfoMini'
import classes from './ProductEdit.module.css'
import ItemsProducts from '../../../components/Products/components/ItemsProducts'
import productClasses from '../../../components/Products/Products.module.css'
import EditInfo from '../../../components/EditInfo/EditInfo'
import {useHistory} from 'react-router-dom'

const ProductEdit = () => {
    const history =useHistory()
    const [edit, setEdit]= useState(false)


    const product = {

        _id:'61bda67f77f569ed2ca4444e',
        title :"Cпонжи для нанесения макияжа....",
        desc:`Ночной крем для лица с коллагеном Medi-Peel Collagen Super10 Sleeping Cream восстанавливает упругость и эластичность кожи, укрепляет тургор, подтягивает и формирует овал лица.

        Крем отличается высочайшей концентрацией коллагена (10,000ppm) который способен заполнить кожный заломы, уменьшить глубину морщин, а также стимулирует выработку собственных эластиновых и коллагеновых волокон. Комплекс из экстрактов 10 суперфудов интенсивно увлажняет, повышает иммунитет кожи, обладает высокой антиоксидантной активностью и активно питает кожу.
        
        Крем восстанавливает гидро-липидный барьер кожи, предупреждая старение эпидермиса, сокращая глубину морщин и омолаживая.
        
        Несмотря на глубокое питание сам крем по текстуре довольно лёгкий и невесомый. Оказывает лёгкое охлаждающее действие и успокаивает кожу. За ночь продукт интенсивно питает и увлажняет кожу, проводит влагу на глубокие слои эпидермиса и борется с сухостью. Восстанавливает упругость и эластичность тканей, повышает тургор и замедляет процессы старения`,
        img:"e0434674-c5fe-43ca-8c6c-f19c3dda3753.jpg",
        
        price: 2000,
        inStock:true,
        createdAt:"2021-11-18T09:14:39.220+00:00",
        updatedAt: "2021-12-18T09:14:39.220+00:00",
        
    }
    const keys=[
        'title',
        'desc',
        'price',
        'inStock',
    ]

    

    return (
        <div>
             <Dashboard/>
             <Button onClick={()=>history.goBack()} className={classes.edit_btn}  variant={'outline-secondary'}>Вернуться обратно</Button>
             <Container>
                <Row>
                    
                    {edit?
                        <div className={classes.editInfo}>
                            <EditInfo product={product} keys={keys}/>
                        </div>
                        :
                        <InfoMini classes={classes} info={product}/> 
                    }

                    {/* Preview */}
                    <div className={classes.preview_container}>
                    <div>
                        
                        <Button onClick={()=>setEdit(!edit)} 
                                className={classes.edit_btn} 
                                variant='outline-secondary'
                                > 

                                {edit? "Отмена" : "Редактировать" }
                        </Button>
                        {edit&& <Button variant={'outline-secondary'}> Применить изменения</Button>}

                        <div className={classes.preview_container}>
                            <div className={classes.preview}>
                                <ItemsProducts product={product} classes={productClasses} preview={true}  />
                            </div>
                        </div>
                    </div>
                    </div>
                  

                </Row>
                
             </Container>
            
        </div>
    )
}

export default ProductEdit
