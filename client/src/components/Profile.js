import React from "react"
import Logout from "./Logout"
import Folders from "./Folders"
export default function Profile({user, setUser, folders, setFolders, songs, setSongs}) {


    return (
        <>
            <Logout user={user} setUser={setUser}/>
            <Folders user={user} folders={folders} setFolders={setFolders} songs={songs} setSongs={setSongs} />
        </>
    )
}