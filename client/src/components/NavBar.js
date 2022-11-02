import React from "react"

import {NavLink} from "react-router-dom"

export default function NavBar(){


    return(
        <>
        <div>
            <NavLink to="/signup">
                    signup
            </NavLink>
        </div>
        <div>
            <NavLink to="/search">
                search
            </NavLink>
        </div>
        <div>
            <NavLink to="/profile">
                profile
            </NavLink>
        </div>
        <div>
            <NavLink to="/login">
                login            
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