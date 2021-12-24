import React from 'react'
import classes from './FilterContainer.module.css'
import MyDropdown from '../Dropdown/MyDropdown'


const FilterContainer = ({sort , setSort,filter, setFilter , search}) => {
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
    const sortValue = [
        'Новые',
        'Дешевые',
        'Дорогие',
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
                            <MyDropdown name={"first"}
                                        title={sort.first}
                                        filter={sort}  
                                        setFilter={setSort} 
                                        classes={classes} 
                                        items={sortValue}/>  
                    </div>
            
            </div>
            {search && <div className={classes.search}><h3>Все результаты по запросу: {search}</h3></div>}
        </div>
    )
}

export default FilterContainer
