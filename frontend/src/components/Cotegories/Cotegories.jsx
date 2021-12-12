import React from 'react'
import {cotegories} from '../../data/data'
import ItemsCotegory from './components/ItemsCotegory'
import classes from './Cotegories.module.css'



const Cotegories = () => {
    return (
            <div className={classes.container}>
            {cotegories.map(cotegory  => (
                <ItemsCotegory key={cotegory.id}  cotegory={cotegory} total={cotegories.length} />
            ))}
        </div>
        
    )
    
}

export default Cotegories
