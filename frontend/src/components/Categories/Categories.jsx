import React from 'react'
import {categories} from '../../data/data'
import ItemsCategory from './components/ItemsCategory'
import classes from './Categories.module.css'



const Categories = () => {
    return (
            <div className={classes.container}>
            {categories.map(category  => (
                <ItemsCategory key={category.id}  category={category} total={categories.length} />
            ))}
        </div>
        
    )
    
}

export default Categories
