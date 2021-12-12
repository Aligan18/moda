import React from 'react'
import {Link} from 'react-router-dom'
const CenterFooter = ({classes}) => {

    const linksArray= [
        {title:'Home', route:'/'},
        {title:'Cart', route:'/cart'},
        {title:'Man Fashion', route:''},
        {title:'Woman Fashion', route:''},
        {title:'My Account', route:''},
       
    ]



    return (
        <div className={classes.center}>
                <ul className={classes.center_list}>
                    <h3 className={classes.center_title}>Полезные ссылки</h3>

                    {linksArray.map(link=>(
                        <Link key={link.title}  className={classes.center_link}  to={link.route}>
                            
                            <li className={classes.center_listItems}>
                                {link.title}
                            </li>

                        </Link>
                    ))}

                </ul>
            </div>
    )
}

export default CenterFooter
