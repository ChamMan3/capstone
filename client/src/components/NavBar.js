import React from "react"

import {NavLink} from "react-router-dom"

export default function NavBar(){


    return(
        <>
        <div class="navbar">
            <NavLink to="/signup">
                    Signup
            </NavLink>
        </div>
        <div class="navbar">
            <NavLink to="/search">
                Search
            </NavLink>
        </div>
        <div class="navbar">
            <NavLink to="/profile">
                Profile
            </NavLink>
        </div>
        <div class="navbar">
            <NavLink to="/login">
                Login            
            </NavLink>
        </div>
        <div class="navbar">
            <NavLink to="/">
                Home           
            </NavLink>
        </div>
        </>
    )

}