import React from "react"
import Logout from "./Logout"
import Folders from "./Folders"
export default function Profile({user, setUser}) {


    return (
        <Logout user={user} setUser={setUser}/>
    )
}