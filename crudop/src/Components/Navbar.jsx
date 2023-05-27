import { Link, useSearchParams } from "react-router-dom"
import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { getProducts, productsearch } from "../Redux/ActionTypes/actionTypes"
export const Navbar=()=>{
    const [searchParams,setSearchparams]=useSearchParams("")
    let initialQuery=searchParams.get("q")
    const [query,setQuery]=useState(initialQuery||"")
    const dispatch=useDispatch()
    const id=useRef(null)
    console.log(id)
    let arr=[
        {path:"/",title:"Home"},
        {path:"/login",title:"Login"},
        {path:"/products",title:"Products"},
        {path:"/admin",title:"Admin"}
    ]
    function handleSearch(e){
        setQuery(e.target.value)
    }
    let paramsObj={
        params:{
            q:query
        }
    }
    useEffect(()=>{
        // I wrote logic to update url using useSearchparams and not to change while reloading also by 
        // storing in useState
        const params={}
        query&&(params.q=query)
        setSearchparams(params)
        id.current&&clearTimeout(id.current)
        id.current=setTimeout(()=>{
            dispatch(getProducts(paramsObj))
        },1000)
    },[query,searchParams])
    // I tried throttling but not yet implemented
    // useEffect(()=>{
    //     let lastCall=0
    //     return ()=>{
    //         if(Date.now()-lastCall>500){
    //             lastCall=Date.now()
    //             console.log("lastCall")
    //             dispatch(getProducts(paramsObj))
    //         }
    //     }
    // },[query])
    return<DIV>
        {arr.map(({path,title},i)=><Link key={i} to={path}>{title}</Link>)}
        <input onChange={handleSearch} value={query} type="text" placeholder="search"/>
    </DIV>
}
const DIV=styled.div `
display:flex;
// border:1px solid red;
width:40%;
margin:auto;
justify-content:space-evenly;
`