import React from 'react'

const RightFooter = ({classes}) => {
    return (
        <div className={classes.right}>
        <div>
            <h3 className={classes.right_title}>Контакты</h3>
                
                <div className={classes.right_items}>
                    <i className={`${classes.right_icon} fas fa-map-marked-alt`}></i>
                    <h5>Адрес </h5>
                </div>

                <div className={classes.right_items}>
                    <i className={`${classes.right_icon} fas fa-phone-alt`}></i>
                    <h5>номер телефона </h5>
                </div>

                <div className={classes.right_items}>
                    <i className={`${classes.right_icon} fas fa-envelope`}></i>
                    <h5>@moda.insta</h5>
                </div>
            
        </div>
        </div>
    )
}

export default RightFooter
