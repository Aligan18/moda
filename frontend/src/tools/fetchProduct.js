import {publicRequest, userCreateRequest} from '../axios/requestMethods'


class fetchProduct {

    getAll =async(methodSearch,category)=>{
        try {
            console.log(category)
            const res = await publicRequest.get(methodSearch==="category"?
                                            `api/product/category/find/?category=${category}`
                                            :`api/product/search/find/`)
            console.log(res.data)
            return res.data && res.data
        } catch (error) {
            console.log(error)
        }  

    }
    getById=async(id)=>{
        try {
            const res = await publicRequest.get(`api/product/find/${id}`)
            console.log(res.data)
          return res.data

        } catch (error) {
            console.log(error)
        }

    } 
    deletById=async(id, Token)=>{
        try {
            console.log('id',id)
            console.log('token',Token)
            const privateRequest =userCreateRequest(Token)
            const res = await privateRequest.delete(`api/product/delete/${id}`)
        
          return res.data

        } catch (error) {
            console.log(error?.response?.data)
        }

    }



}

export default new fetchProduct()