import React from 'react'
import{Button} from 'react-bootstrap'

const Slide = ({slide, classes}) => {
    return (
        
        <div style={{background:slide.back}} className={classes.slider}>
            <div className={classes.img_container}>
                {/* Photo */}
                <img src={slide.img} alt='' className={classes.img}/>
            </div>

            <div className={classes.info_container}>
                {/* Title */}
                <h1 className={classes.titel}>{slide.title}</h1>
                {/* Description */}
                <p className={classes.description}>{slide.desc}</p>
                <Button variant='outline-secondary'> ПОДРОБНЕЕ</Button>
            </div>
        </div>

    )
}

export default Slide
