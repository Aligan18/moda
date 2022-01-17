import React, {useState} from 'react'
import classes from './ListItems.module.css'

import {useSelector} from 'react-redux'


const ListItems2 = ({publicList, privateList, publicTitles, privateTitles, actions} ) =>  {

    const user = useSelector(state => state.user.currentUser)
    const [showPanel, setShowPanel] = useState(false)

    const tabelChunking=()=>{
        let chunk = publicTitles.length/privateTitles.length

        return chunk%2? chunk+=1 : chunk

    }

    const showHideItems = (list , title)=>{
       
            return <td key={title} colSpan={Math.floor(tabelChunking())}>
            
                    {title==='img'?
                    <img className={classes.img} alt="" src={process.env.REACT_APP_STATIC_LOC + list[title]}/>
                    :
                    `${title} : ${list[title]}`
                    }
            </td>
    }


    return (
        <>
            <tr className={classes.products}>

                {/* Checkbox */}
                <td> <input type="checkbox"/></td>

                {/* PublicItems */}
                        {publicTitles.map(title=>
                            
                            publicList[title]&&<td key={title}> {`${publicList[title]}`}</td>
                        
                        )}

                {/* ActionButtons */}
                <td>
                    {privateTitles && <button onClick={()=>setShowPanel(!showPanel)} className={classes.btn}>
                                        <i className="fas fa-chevron-down"></i>
                                    </button>
                    }
                    {actions && actions.map(action=>
                                    <button onClick={()=>action.handleClick(publicList, user)} className={classes.btn}>
                                            <i className={action.icon}/>
                                    </button>
                    )}
                </td>
            </tr> 

            {showPanel&& 
                    
                privateList.map(list=>
                        <tr className={classes.products}>
                        {privateTitles.map(title=>
                            
                            showHideItems(list, title)
                            
                            )}
                        </tr>
                        )
            } 
        </>
    )
}

export default ListItems2
