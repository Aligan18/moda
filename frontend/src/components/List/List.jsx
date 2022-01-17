import React from 'react'
import ListItems2 from './components/ListItems2'
import {Table, Accordion,Card} from 'react-bootstrap'
import fetchProduct from '../../tools/fetchProduct'

const List = ({publicLists, privateListKey, publicTitles, privateTitles, actions }) => {

    const createPrivateList=(publicList)=>{

        if ( privateListKey){
            let privateList =[]
            let productIdAndQuantity = publicList[privateListKey]

            productIdAndQuantity.map(async(item) =>{
                 
                const product = await fetchProduct.getById(item._id)
                const quantity = item.quantity
                privateList.push({...product, quantity})
                
            })

            return privateList
        }
        else {
            return [publicList]

        }
    }

    return (
            <Table striped bordered hover>
            <thead>
                <tr>
                    <td> <input type="checkbox"/></td>
                    {publicTitles.map(title=>
                        title&& <th key={title}>{title}</th>
                    )}
                </tr>
            </thead>
           
             <tbody>
           
                    {publicLists.map((publicList)=>{

                     const privateList = createPrivateList(publicList)
                       
                    

                    return<>
                            <ListItems2 key={publicList._id} 
                                        publicList= {publicList} 
                                        publicTitles={publicTitles} 
                                        privateTitles={privateTitles}
                                        privateList = {privateList} 
                                        actions={actions}
                                         />

                        </>
                    })}  

            </tbody>
          
            </Table>
            
    )
}

export default List



  



