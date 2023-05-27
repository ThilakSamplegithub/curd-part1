import { useState } from "react"
import {useDispatch,useSelector} from "react-redux"
import { login } from "../Redux/ActionTypes/actionTypes"
import { loginReducer } from "../Redux/Reducer/loginReducer"
import { Navigate, useLocation,useNavigate } from "react-router-dom"
import styled from "styled-components"
export default function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {isAuth,isError}=useSelector(state=>state.loginReducer)
    console.log(isError,isAuth)
    const location=useLocation()
    console.log(location)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newData={
            email,
            password
        }
        dispatch(login(newData))
        .then(()=>navigate(location.state))
    }
    return<DIV isAuth={isAuth} isError={isError} >
        <h2>{isAuth?"Login Successful":"Continue to login"}</h2>
        <form onSubmit={handleSubmit}>
        <input type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
         <input type="submit" />
        </form>
    </DIV>
}
const DIV=styled.div`
h2{
   color:${({isAuth})=>isAuth?"green":"red"}
}
input{
    border:${({isError})=>(isError?"1px solid red":"1px solid gray")}
}
`