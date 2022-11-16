import React from "react"

import {NavLink} from "react-router-dom"

export default function NavBar(){


    return(
        <>
        <div>
            <NavLink to="/signup">
                    Signup
            </NavLink>
        </div>
        <div>
            <NavLink to="/search">
                Search
            </NavLink>
        </div>
        <div>
            <NavLink to="/profile">
                Profile
            </NavLink>
        </div>
        <div>
            <NavLink to="/login">
                Login            
            </NavLink>
        </div>
        <div>
            <NavLink to="/">
                Home           
            </NavLink>
        </div>
        </>
    )

}