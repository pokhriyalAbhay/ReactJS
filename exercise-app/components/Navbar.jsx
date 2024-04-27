import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
   
    return (
        <>
            <nav id="nav">
                <Link to="/"><li>home</li></Link>
                <Link to="/Login"><li>Login</li></Link>
                <Link to="/About"><li>about</li></Link>
            </nav>
        </>
    )
}
export default Navbar;