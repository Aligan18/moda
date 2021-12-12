import React from 'react'

const Arrow = ({side , setSliderIndex , sliderIndex ,max, classes }) => {

    const handleClick=(arrow)=>{
        if(arrow === 'left'){
            setSliderIndex(sliderIndex>0? sliderIndex-1: max-1) 
        }
        else{
            setSliderIndex(sliderIndex<max-1? sliderIndex+1:0)
        }
        
    }

    return (<>
        {side ==='left'
        ?
            <div        
                style={{left: '10px'}} 
                className={classes.arrows}
                onClick={()=>handleClick('left')}
                >
                <i className="fas fa-chevron-left"></i>
            </div>
            :
            <div 
                    style={{right: '10px'}} 
                    className={classes.arrows}
                    onClick={()=>handleClick('right')}
                    >
                <i className="fas fa-chevron-right"></i>
            </div>
        }
        </>

    )
}

export default Arrow
