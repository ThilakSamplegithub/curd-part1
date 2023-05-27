import { FAILURE, LOGIN_SUCCESS, REQUEST } from "../Actions/action"

let initialState={
    isAuth:true,
    token:'',
    isLoading:false,
    isError:false,
    errorMessage:""
}
export const loginReducer=(state=initialState,{type,payload})=>{
switch(type){
    case "REQUEST":{
        return {...state,isLoading:true}
    }
    case "FAILURE":{
        return {...state,isLoading:false,isError:true,errorMessage:payload}
    }
    case "LOGIN_SUCCESS":{
        return{...state,isLoading:false,isAuth:true,token:payload}
    }
    default:{
        return state
    }
}
}