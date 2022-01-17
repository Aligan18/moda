import React from 'react'


const ProductInfoMini = ({info, classes}) => {
    
    const keys = Object.keys(info)
//process.env.REACT_APP_STATIC_LOC + info.img

    return (
        <div className={classes.wrapper}>
     
            {keys.map(key =>
                <div className={classes.line}>
                    <div className={classes.leftBox}>
                        <h7>{key}</h7>
                    </div>
                    <div className={classes.rightBox}>
                        <h7>{info[key]}</h7>
                    </div>
                </div>
            )}
           
        </div>
    )
}

export default ProductInfoMini
