import { ADD_PRODUCT_SUCCESS, DELETE_PRODUCT, FAILURE, GET_PRODUCT_SUCCESS, PATCH_SUCCESS, REQUEST } from "../Actions/action"

const initialState={
    isLoading:false,
    isError:false,
    product:[]
}
export const addReducer=(state=initialState,{type,payload})=>{
switch(type){
    case "REQUEST":{
        return {...state,isLoading:true}
    }
    case 'FAILURE':{
        return {...state,isError:true}
    }
    case "ADD_PRODUCT_SUCCESS":{
        return{...state,isLoading:false}
    }
    case "GET_PRODUCT_SUCCESS":{
        return{...state,isLoading:false,product:payload}
    }
    case DELETE_PRODUCT:{
        return{...state,isLoading:false,product:payload}
    }
    case PATCH_SUCCESS:{
        return{...state,isLoading:false}
    }
    default:{
        return state
    }
}
}