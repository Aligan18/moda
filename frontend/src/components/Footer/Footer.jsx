import React from 'react'
import classes from './Footer.module.css'
import LeftFooter from './components/LeftFooter'
import RightFooter from './components/RightFooter'
import CenterFooter from './components/CenterFooter'
const Footer = () => {
    return (
        <div className={classes.container}>
             
           <LeftFooter classes={classes} />
           <CenterFooter classes={classes}/>
           <RightFooter classes={classes} />

        </div>
    )
}

export default Footer
