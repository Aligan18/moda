
import React from 'react'
import classes from './EditInfo.module.css'


const EditInfo = ({product,keys}) => {
   

    return (
            <>
            {keys.map(key=>
                (key!=="inStock"
                        ?
                        <div key={key} className={classes.input_box}>
                            <h6>{key}</h6>
                            <textarea style={key==="desc"? {height:"500px"}:{}}  className={classes.textarea} key={key}> 
                                 {product[key]}
                            </textarea>
                        </div>
                        : 
                        <div key={key} className={classes.input_box}>
                            <h6>{key}</h6>
                            <input type={'checkbox'} />                      

                        </div>
               
                )
              
            )}
        </>
    )
}

export default EditInfo
