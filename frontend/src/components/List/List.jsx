import React from 'react'
import ListItems from './components/ListItems'

const List = ({productItems , EditButton}) => {
    const listItems = {
        title:"Название",
        info:"Цена",
        status:"Статус",
        counter:"Количество продаж",
        action:"Действия",
    }


    return (
        <div>
            
            <ListItems listItems={listItems}/>

            {productItems.map(product=>
                <ListItems listItems={product} EditButton={EditButton}/>

            )}
           
           
           
        </div>
    )
}

export default List
