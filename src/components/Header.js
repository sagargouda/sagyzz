

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import {useSelector} from "react-redux";
import './Header.css';


export default function Header() {
    const onlineStatus = useOnlineStatus();

    const [showMenu, setShowMenu] = useState(false);

// subscribing to store using our selector
    const cartItems = useSelector((store)=> store.cart.items)
    console.log(cartItems)
    return (
        <div className="header-container">
            <div className="logo-container">
                <Link to="/"><img src={require('./logos.png')} alt="sagyzz-logo" className="logo" /></Link>
            </div>
            {/* Button to toggle the menu on smaller screens */}
            <button className="toggle-btn" onClick={() => setShowMenu(!showMenu)}>
                ☰
            </button>
            <div className={`nav-container ${showMenu ? 'show' : ''}`}>

                <ul className="nav-container__list">
                    <li className="nav-container__item">{onlineStatus ? "✅" : "🔴"} </li>
                    <li className="nav-container__item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-container__item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-container__item"><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li className="nav-container__item"> <Link to="/cart"> Cart-({cartItems.length} items)</Link> </li>
                </ul>
            </div>
        </div>
    );
}
