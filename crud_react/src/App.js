import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import EditBlog from "./components/Blog/BlogEdit";
import CreateBlog from "./components/Blog/BlogCreate";
import BlogList from "./components/Blog/BlogList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/create"} element={<CreateBlog/>}></Route>
                    <Route path={"/list"} element={<BlogList/>}></Route>
                    <Route path={"/edit/:id"} element={<EditBlog/>}></Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
