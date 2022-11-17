import React from "react"
import Logout from "./Logout"
import Folders from "./Folders"
import { useNavigate } from "react-router-dom"
export default function Profile({user, setUser, folders, setFolders, songs, setSongs, setClickedFolder}) {

let navigate= useNavigate()


    function handleClick1(){
        navigate("/signup")
    }

    function handleClick2(){
        navigate("/login")
    }

    return (
        <>
        {user ? 
        <>
            <Logout user={user} setUser={setUser}/> 
            <br></br>
            <br></br>
            
            <Folders user={user} folders={folders} setFolders={setFolders} songs={songs} setSongs={setSongs} setClickedFolder={setClickedFolder}/>
        </>
    : 
        <>
    <button onClick={handleClick1}>Dont have an account? Click Me! </button>
    <button onClick={handleClick2}>Forgot to log in? Click Me!</button> 
        </>
    }
        </>
    )
}