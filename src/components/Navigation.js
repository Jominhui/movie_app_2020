import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () =>{
    return <div className="nav-area">
        <Link className="nav" to="/">Home</Link>
        <Link className="nav" to="/about">About</Link>
    </div>
}

export default Navigation;