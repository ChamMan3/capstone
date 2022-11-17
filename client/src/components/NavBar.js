import React from "react"

import {NavLink} from "react-router-dom"

export default function NavBar(){


    return(
        <ul class="navbar">
        <li >
            <NavLink className="navLink" to="/search">
                Search
            </NavLink>
        </li>
        <li >
            <NavLink className="navLink" to="/profile">
                Profile
            </NavLink>
        </li>
        <li>
            <NavLink className="navLink" to="/">
                Home           
            </NavLink>
        </li>
        <li>
            <NavLink className="navLink" to="/login">
                Login            
            </NavLink>
        </li>
        <li>
        <NavLink className="navLink" to="/signup">
            Signup
        </NavLink>
        </li>
        </ul>
    )

}

