import {NavLink} from "react-router-dom";
import React from "react";

function Home() {
    return (
        <>
            <NavLink to={"/"}>Home / </NavLink>
            <NavLink to={"/list"}>List / </NavLink>
            <NavLink to={"/create"}>Create / </NavLink>
            {/*<NavLink to={"/edit"}>Edit / </NavLink>*/}
            <h1>Home</h1>
        </>
    )
}

export default Home;