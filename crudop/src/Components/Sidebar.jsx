import { useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"
export const Sidebar=({getObj})=>{
    const [searchparams,setSearchparams]=useSearchParams("")
    const initialBrand=searchparams.getAll("brand")
    const [brand,setBrand]=useState(initialBrand||[])
    const initialGender=searchparams.getAll("gender")
    const [gender,setGender]=useState(initialGender||[])
    const initialCategory=searchparams.getAll("category")
    const [category,setCategory]=useState(initialCategory||[])
    const initialOrder=searchparams.get('order')
    const [order,setOrder]=useState(initialOrder||"")
    console.log(searchparams.getAll("gender"))
    useEffect(()=>{
    let params={gender,category,brand}
    order&& (params.order=order)
        setSearchparams(params)
    },[gender,category,brand,order])
   
function handleGender(e){
 console.log(e.target.value)
 let genderArr=[...gender]
  genderArr.includes(e.target.value)?genderArr=genderArr.filter((el)=>el!==e.target.value):genderArr.push(e.target.value)
  setGender(genderArr)
}
const handleCategory=(e)=>{
 console.log(e.target.value)
 let categoryArr=[...category]
 categoryArr.includes(e.target.value)?categoryArr=categoryArr.filter((el)=>el!==e.target.value):categoryArr.push(e.target.value)
 setCategory(categoryArr)
}
const handleBrand=(e)=>{
    let brandArr=[...brand]
    brandArr.includes(e.target.value)?brandArr=brandArr.filter((el)=>el!==e.target.value):brandArr.push(e.target.value)
    setBrand(brandArr)
}
console.log('brandArr',brand)
console.log(searchparams.getAll("category"))
function handlePrice(e){
    console.log(e.target.value)
    setOrder(e.target.value)
}
console.log("order",order)
    return<div>
        <h3>filter by Gender:</h3>
        <div>
            <label>men</label>
            <input type="checkbox" value={"men"} checked={gender.includes("men")} onChange={handleGender} />
        </div>
        <div>
            <label>women</label>
            <input type="checkbox" value={"Women"} checked={gender.includes("Women")} onChange={handleGender} />
        </div>
        <div>
            <label>kids</label>
            <input type="checkbox" value={"kids"} checked={gender.includes("kids")} onChange={handleGender} />
        </div>
        <h3>filter by Category:</h3>
        <div>
            <label>Top-wear</label>
            <input type="checkbox" value={"top-wear"} checked={category.includes("top-wear")} onChange={handleCategory} />
        </div>
        <div>
            <label>bottom-wear</label>
            <input type="checkbox" value={"bottom-wear"} checked={category.includes('bottom-wear')} onChange={handleCategory} />
        </div>
        <div>
            <label>kids-wear</label>
            <input type="checkbox" value={"kids"} checked={category.includes("kids")} onChange={handleCategory} />
        </div>
        <h3>filter by Brand:</h3>
        <div>
            <label>Armani</label>
            <input type="checkbox" value={"Armani"} checked={brand.includes("Armani")} onChange={handleBrand}/>
        </div>
        <div>
            <label>Eugoboss</label>
            <input type="checkbox" value={"Eugoboss"} checked={brand.includes("Eugoboss")} onChange={handleBrand}/>
        </div>
        <h3>sort by price:</h3>
        <div onChange={handlePrice}>
            <input type="radio"  name="order" defaultChecked={order==="asc"} value={"asc"} />
            <label>ascending</label>
            <input type="radio" name="order" defaultChecked={order==="desc"}  value={"desc"}  />
            <label>descending</label>
        </div>
    </div>
}
