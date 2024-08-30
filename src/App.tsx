import Product from "./compnents/Product.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./compnents/Products.tsx";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import DashBoard from "./compnents/DashBoard.tsx";
import NavBar from "./compnents/NavBar.tsx";
import {useState} from "react";
export default function App(){
    return(
        <div>
            <BrowserRouter>
                <NavBar></NavBar>
                <DashBoard></DashBoard>
                <Routes>
                    <Route path="/home" element={<Product/>}></Route>
                    <Route path="/products" element={<Products/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}