import React,{useState} from 'react'
import classes from './ListItems.module.css'
import fetchProduct from '../../../tools/fetchProduct'
import {useSelector} from 'react-redux'



const ListItems = ({list, items,hideItems,orderedProductsId,buttons}) => {
    const user = useSelector(state => state.user.currentUser)
    const [showPanel, setShowPanel] = useState(false)
    // console.log('items',items)
    // console.log('list',list)
    console.log('obj', orderedProductsId)
    // console.log('hi',hideItems)
    
    
    //Заглушка
    const  fetchProductById=async(id)=>{
        console.log('id', id)
        
        let product = 
        console.log('product', product)
        return product
    }

    const showHideItems=(item , product)=>{

        console.log('item',item)
        console.log('product',product)
            if (product){
                
                
               
                return item==='img'?
                            <img className={classes.img} alt="" src={process.env.REACT_APP_STATIC_LOC + product[item]}/>
                            :
                            `${item} : ${product[item]}`    
                
                }
            
            else {
               return item==='img'?
                        <img className={classes.img} alt="" src={process.env.REACT_APP_STATIC_LOC + list[item]}/>
                        :
                        list[item]
            }

    }
    const deployOneItem=(item,product)=>{
       
        return <td key={item} colSpan={Math.floor(tabelChunking())}>
                        {showHideItems(item, product)}
                </td>
        
    }
    const tabelChunking=()=>{
        let chunk = items.length/hideItems.length

        return chunk%2? chunk+=1 : chunk

    }




// reder 
    return (
        <>
      
 
            <tr className={classes.products}>

                {/* Checkbox */}
                <td> <input type="checkbox"/></td>

                {/* PublicItems */}
                        {items.map(item=>
                            
                            list[item]&&<td key={item}> {`${list[item]}`}</td>
                        
                        )}

                {/* ActionButtons */}
                <td>
                    {hideItems && <button onClick={()=>setShowPanel(!showPanel)} className={classes.btn}>
                                        <i className="fas fa-chevron-down"></i>
                                    </button>
                    }
                    {buttons && buttons.map(button=>
                                    <button onClick={()=>button.handleClick(list, user)} className={classes.btn}>
                                            <i className={button.icon}/>
                                    </button>
                    )}
                </td>
            </tr>   


            {/* HideItems */}
            {showPanel && (

                orderedProductsId ?  
                            //если несколько спрятанных строк 
                            orderedProductsId.map(async(id)=>{
                            const product = await fetchProduct.getById(id)

                            return <tr key={id} className={classes.productshide}> 
                                    {  hideItems.map(item=>deployOneItem(item , product))}
                            </tr>
                            })
                        :
                            /* если только одна спрятанная строка */
                            <tr className={classes.productshide}> 
                                    {  hideItems.map(item=>deployOneItem(item))}
                                
                            </tr>
                       
            )}
    </>
    )
}

export default ListItems


