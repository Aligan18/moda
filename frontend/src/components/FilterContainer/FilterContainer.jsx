import React, {useState} from 'react'
import classes from './FilterContainer.module.css'
import MyDropdown from '../Dropdown/MyDropdown'


const FilterContainer = ({filter, setFilter}) => {
    const colorFilter=[
        'Red' ,
        'White',
        'Yellow',
        'Green' ,
        'Fiolet',
        'Blue'
    ]
    const sizeFilter=[
        'X' ,
        'M',
        'S',
        'L' ,
        
    ]
    

    
    


    return (
        <div className={classes.container}>
             <div className={classes.filtrContainer}>
                    <div className={classes.filter}>
                    <h5 className={classes.title}>Подбор параметров:</h5>
                    
                            <MyDropdown name={"color"} 
                                        title={filter.color}
                                        filter={filter}
                                        setFilter={setFilter}
                                        classes={classes} 
                                        items={colorFilter}
                                        
                                        
                                        />

                            <MyDropdown name={"size"}
                                         title={filter.size}
                                         filter={filter}
                                        setFilter={setFilter} 
                                        classes={classes} 
                                        items={sizeFilter}/> 
                    </div>
            
                    <div className={classes.filter}>
                            <h5 className={classes.title}> Вначале:</h5>
                            <MyDropdown name={"new"}
                                        title={filter.new}
                                        filter={filter}  
                                        setFilter={setFilter} 
                                        classes={classes} 
                                        items={colorFilter}/>
                    </div>
            
            </div>
        </div>
    )
}

export default FilterContainer
