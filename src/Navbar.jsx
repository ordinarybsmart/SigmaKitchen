import React from "react";
import './index.css';

function Navbar(){
    return(
        <nav className="navbar">
            <ul>
                <li><a href="#home">Home</a></li> 
                <li><a href="#recipes">Recipes</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;