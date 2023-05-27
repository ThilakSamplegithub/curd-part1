import {Routes,Route} from "react-router-dom"
import HomePage from "../Pages/HomePage" 
import Login from "../Pages/Login"
import { Admin } from "../Pages/Admin"
import Products from "../Pages/Products"
import { PrivateRoute } from "./PrivateRoute"
import { EditPage } from "../Pages/EditPage"
const AllRoutes=()=>{
    return<Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/products" element={<PrivateRoute><Products/></PrivateRoute>}/>
        <Route path="/edit/:id" element={<EditPage/>}/>
        <Route path="*" element={<h1>404 Not-Found-Page</h1>}/>
    </Routes>
}
export default AllRoutes