import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import SignupS from './Seller/SignupS'
import LoginS from './Seller/LoginS'
import { HomeS } from './Seller/HomeS'
import { AddProd } from './Seller/Products/AddProd'
import { ManageProd } from './Seller/Products/ManageProd'
import { AllProducts } from './Products/AllProducts'
import ProductDetails from './Products/ProductDetails'
import { FetProdByCat } from './Products/FetProdByCat'

export const Landing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} ></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/seller/signup' element={<SignupS/>}></Route>
            <Route path='/seller/login' element={<LoginS/>}></Route>
            <Route path='/seller/home' element={<HomeS/>}></Route>
            <Route path='/seller/manageproducts' element={<ManageProd/>}></Route>
            <Route path='/seller/manageproducts/addproducts' element={<AddProd/>}></Route>
            <Route path='/home/allproducts' element={<AllProducts/>}></Route>
            <Route path='/products/:id' element={<ProductDetails/>}></Route>
            <Route path='/products/categories/:category' element={<FetProdByCat/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
