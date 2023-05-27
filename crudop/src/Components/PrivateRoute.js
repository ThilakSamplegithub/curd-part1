import { Navigate, useLocation } from "react-router-dom"
import React from "react"
import { useDispatch,useSelector } from "react-redux"
import { loginReducer } from "../Redux/Reducer/loginReducer"
export const PrivateRoute=({children})=>{
    const auth=useSelector(store=>store.loginReducer.isAuth)
    const location=useLocation()
    console.log(location)
    console.log(auth)
   return auth?children:<Navigate state={location.pathname} to="/login"/>
}