import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addProduct } from '../Redux/ActionTypes/actionTypes';
export const Admin=()=>{
    const initialState={
        image:"",
        name:"",
        price:"",
        brand:"",
        category:"",
        gender:""
    }
    const dispatch=useDispatch()
    const[product,setProduct]=useState(initialState)
    function handleChange(e){
        setProduct({...product,[e.target.name]:e.target.name==="price"?+e.target.value:e.target.value})
    }
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(product)
        dispatch(addProduct(product))
        setProduct(initialState)
    }
    const {price,image,brand,category,gender,name}=product
    return(
        <DIV>
        <form onSubmit={handleSubmit}>
           <input name="name" value={name} onChange={handleChange} type='text'placeholder='Enter product name' />
            <input name='image'value={image} onChange={handleChange} type='text'placeholder='Enter image' />
            <input type='text' name='brand' value={brand} onChange={handleChange}  placeholder='Enter brand'/>
            <input name='price' value={price} onChange={handleChange} type='text'placeholder='Enter price' />
            <select name="gender" value={gender} onChange={handleChange}>
              <option value="gender">Gender</option>
              <option value="men">Male</option>  
              <option value='Women'>Female</option>  
              <option value="kids">Kids</option>  
            </select>
            <br/>
            <select value={category} name='category' onChange={handleChange}>
                <option value="category">Category</option>
                <option value="top-wear">Top-Wear</option>
                <option value="bottom-wear">bottom-wear</option>
                <option value="kids">kids</option>
            </select>
            <br/>
            <button type='submit'>Add</button>
        </form>
        </DIV>
    )
}
const DIV=styled.div `
//  border:1px solid red;
height:400px;
width:60%;
margin:auto;
display:flex;
align-items:center;
justify-content:space-evenly;
form{
    // border:1px solid red;
    width:20%;
    align
}
input{
    margin:15px;
}
select{
 margin:15px;
}
button{
    margin:10px
}
`