
import {publicRequest, userCreateRequest} from '../axios/requestMethods'


class fetchOrder {

    getAll =async(Token)=>{
        try {
            const privateRequest =userCreateRequest(Token)
            const res = await privateRequest.get(`api/users/find/`)
            console.log(res.data)
            return res.data && res.data
        } catch (error) {
            console.log(error)
        }  

    }
   

}

export default new fetchOrder()