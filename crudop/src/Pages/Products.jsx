import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getProducts} from "../Redux/ActionTypes/actionTypes"
import { addReducer } from "../Redux/Reducer/addReducer"
import styled from "styled-components"
import { Sidebar } from "../Components/Sidebar"
import { Link, useSearchParams } from "react-router-dom"
import { deleteProduct } from "../Redux/ActionTypes/actionTypes"
import { FAILURE } from "../Redux/Actions/action"
export default function Products(){
const dispatch=useDispatch()
const [searchParams]=useSearchParams("")
const {product}=useSelector((state)=>state.addReducer)
// const [datas,setDatas]=useState("")
console.log(product,'is')
let obj={
    params:{
        gender:searchParams.getAll("gender"),
        category:searchParams.getAll("category"),
        brand:searchParams.getAll("brand"),
        _sort:searchParams.get("order")&&"price",
        _order:searchParams.get("order")
    }
}

    useEffect(()=>{
        dispatch(getProducts(obj))
    },[searchParams])
    const handleDelete=(id)=>{
        console.log(typeof id)
        dispatch(deleteProduct(id))
        // In real world we call getRequest and I wrote it down here I returned promise
        // dispatch(deleteProduct(id)).then(()=>dispatch(getProducts())).catch(()=>dispatch({type:FAILURE}))
    }
    return<DIV1>
       <div className="side"><Sidebar/></div> 
    <DIV>
       {product.map(({image,name,category,brand,gender,price,id})=><div key={id}>
        <img src={image} width="400px" alt="error" />
        <h1>{name}</h1>
        <h2>Brand:{brand}</h2>
        <h3>category:{category}</h3>
        <h3>gender:{gender}</h3>
        <p>Price:{price}</p>
        <button onClick={()=>handleDelete(id)}>Delete</button>
        <button><Link to={`/edit/${id}`}>Edit</Link></button>
       </div>)} 
    </DIV></DIV1>
}
const DIV=styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
gap:30px;
margin-top:50px
`
const DIV1=styled.div`
display:flex
`