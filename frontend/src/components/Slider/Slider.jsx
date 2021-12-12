import React, { useState } from 'react'

import {sliderData} from '../../data/data'  
import Arrow from './components/ArrowSlider'
import ItemsSlide from './components/ItemsSlider'
import classes from "./Slider.module.css"

const Slider = () => {
    const [sliderIndex, setSliderIndex]=useState(0)


    return (
        <div className={classes.container}>

            <Arrow side="left" 
            sliderIndex={sliderIndex} 
            setSliderIndex={setSliderIndex}
            max ={sliderData.length}
            classes={classes}
            />
            
            {/* Slider */}
            <div 
            style={{transform: `translateX(${sliderIndex * -100}vw)`}}
            className={classes.wrapper}
            >

                    {sliderData.map((slide, index)=>(
                        <ItemsSlide classes={classes} key={index} slide={slide}/>
                    ))} 
                            
            </div>

            <Arrow side="right" 
            sliderIndex={sliderIndex} 
            setSliderIndex={setSliderIndex}
            max ={sliderData.length}
            classes={classes}

             />
        </div>
    )
}

export default Slider
