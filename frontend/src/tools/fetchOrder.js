import {publicRequest, userCreateRequest} from '../axios/requestMethods'


class fetchOrder {

    getAll =async(Token)=>{
        try {
            const privateRequest =userCreateRequest(Token)
            const res = await privateRequest.get(`api/order/find`)
            console.log(res.data)
            return res.data && res.data
        } catch (error) {
            console.log(error)
        }  

    }
    getById=async(id)=>{
        try {
            const res = await publicRequest.get(`api/product/find/${id}`)
            console.log(res)
          return res.data

        } catch (error) {
            console.log(error)
        }

    } 
    deletById=async(id, Token)=>{
        try {
           
            const privateRequest =userCreateRequest(Token)
            const res = await privateRequest.delete(`api/product/delete/${id}`)
        
          return res.data

        } catch (error) {
            console.log(error.response.data)
        }

    }



}

export default new fetchOrder()