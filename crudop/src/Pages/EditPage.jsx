import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { patchingData } from "../Redux/ActionTypes/actionTypes";
export const EditPage=()=>{
    const [price,setPrice]=useState("");
    let myProduct=useSelector((state)=>state.addReducer.product)
    const dispatch=useDispatch()
    const {id}=useParams()
    console.log(id)
    function handleChange(e){
        setPrice(e.target.value)
    }
    useEffect(()=>{
       let newProduct= myProduct.filter((el)=>el.id===+id)
       console.log(newProduct)
       let p=newProduct[0].price
        setPrice(p)
    },[])
    function handleEdit(){
        const data={price}
        console.log(id)
        dispatch(patchingData(id,data))
        setPrice("")
    }
    return<div>
        <input type="number" value={price} onChange={handleChange} />
        <button onClick={handleEdit}>Edit</button>
        </div>
}