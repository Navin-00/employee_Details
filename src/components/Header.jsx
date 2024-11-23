import React from "react";
import { FaHome, FaUser } from 'react-icons/fa';
import './Header.css';

export default function Header(){
    return(
       <nav className="nav-bar">
            <div className="left-section">
            <FaHome className="home-icon"/>
            </div>
            <div className="right-section">
                <FaUser className="user-icon"/>
                <h2>Employee Management</h2>
            </div>
       </nav>
    );
}
