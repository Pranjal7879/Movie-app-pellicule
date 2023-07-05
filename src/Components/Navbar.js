import React from "react";
import Logo from "../logo.png";
import { Link } from 'react-router-dom'
function Navbar() {
    return <>
        <div className="pl-12 flex space-x-8 items-center py-6">
            <img src={Logo} width="80px" alt="err"></img>
            <Link to="/" className="text-blue-400 font-bold text-xl md:text-3xl">Movies</Link>
            <Link to="favourites" className="text-blue-400 font-bold text-xl md:text-3xl">Favourites</Link>
        </div>
    </>;
}

export default Navbar; 