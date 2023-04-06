import React from "react";
import Title from "./Title";
import "./Header.css";

function Header() {
    return (
       <div className="header">
        <Title/>
        <div  className="nav-bar">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Project</li>
            <li>Resume</li>
        </ul>
       </div>
       </div>
    );

}
export default Header;