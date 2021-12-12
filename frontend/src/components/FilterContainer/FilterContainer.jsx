import React, {useState} from 'react'
import classes from './FilterContainer.module.css'
import MyDropdown from '../Dropdown/MyDropdown'


const FilterContainer = () => {
    const colorFilter=[
        'Red' ,
        'White',
        'Yellow',
        'Green' ,
        'Fiolet',
        'Blue'
    ]

    const [value , setValue] = useState('Цвет')
    


    return (
        <div className={classes.container}>
             <div className={classes.filtrContainer}>
                    <div className={classes.filter}>
                    <h5 className={classes.title}>Подбор параметров:</h5>
                    
                            <MyDropdown value={value} 
                                        setValue={setValue}
                                        classes={classes} 
                                        colors={colorFilter}
                                        
                                        />

                            <MyDropdown value={value}
                                        setValue={setValue} 
                                        classes={classes} 
                                        colors={colorFilter}/> 
                    </div>
            
                    <div className={classes.filter}>
                            <h5 className={classes.title}> Вначале:</h5>
                            <MyDropdown value={value}  
                                        setValue={setValue} 
                                        classes={classes} 
                                        colors={colorFilter}/>
                    </div>
            
            </div>
        </div>
    )
}

export default FilterContainer
