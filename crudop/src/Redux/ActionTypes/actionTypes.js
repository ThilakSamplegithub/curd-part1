import { ADD_PRODUCT_SUCCESS, DELETE_PRODUCT, PATCH_SUCCESS } from "../Actions/action"
import { FAILURE, LOGIN_SUCCESS, REQUEST,GET_PRODUCT_SUCCESS } from "../Actions/action"
import axios from "axios"
export const login=(newData)=>(dispatch)=>{
        dispatch({type:REQUEST})
   return axios.post(`https://reqres.in/api/login`,newData)
       .then(res=>{console.log(res.data.token);dispatch({type:LOGIN_SUCCESS,payload:res.data.token})})
       .catch((err)=>{console.log("error came");dispatch({type:FAILURE,payload:err.message})})
    }
export const addProduct=(product)=>(dispatch)=>{
    dispatch({type:REQUEST})
    axios.post(`http://localhost:8080/products`,product)
    .then(res=>{console.log(res.data);dispatch({type:ADD_PRODUCT_SUCCESS})})
}
export const getProducts=(paramsObj)=>{
    return (dispatch)=>{
        dispatch({type:REQUEST})
        axios.get(`http://localhost:8080/products`,paramsObj)
        
        .then((res)=>{console.log(res.data);dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})})
        .catch(()=>dispatch({type:FAILURE}))
    }
}
export const deleteProduct=(id)=>{
    let payload=[]
    axios.get(`http://localhost:8080/products`).then(res=>{payload=res.data})
    return (dispatch)=>{
        dispatch({type:REQUEST})
        axios.delete(`http://localhost:8080/products/${id}`)
        .then((res)=>{payload=payload.filter((el)=>el.id!==id)})
        .then(()=>dispatch({type:DELETE_PRODUCT,payload}))
        .catch(()=>dispatch({type:FAILURE}))
    }
}
//here I wrote alternative of delete functionality which is implemented using 
// getRequset as in real world,but for evaluation I just need to update store
//  i.e not suggested way in real world
// export const deleteProduct=(id)=>{
//   return async(dispatch)=>{
//       dispatch({type:REQUEST})
//      axios.delete(`http://localhost:8080/products/${id}`) 
//   }
// }
// axios.delete(url[, config])
// patch and put automatically changes without much to do because as I move to see output I change url which 
// is tracked by useSearchparams which is an item in my dependency array 
export const patchingData=(id,data)=>{
    console.log(data)
    console.log(id)
return (dispatch)=>{
    dispatch({type:REQUEST})
    axios.patch(`http://localhost:8080/products/${id}`,data)
    .then(()=>dispatch({type:PATCH_SUCCESS}))
    .catch(()=>dispatch({type:FAILURE}))
}
}
export const productsearch=()=>{
    
}