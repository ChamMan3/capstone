import React from "react"
import FolderCard from "./FolderCard"

export default function FolderList({user, folders, handleDeleteFolder, handleUpdateFolder, songs, setSongs}) {
    if (folders.length > 1){ return (
        <ul className="cards">
          {folders.map((folder) => {
            return ( 
              
              <FolderCard
              
                key={folder.id}
                folder={folder}
                handleDeleteFolder={handleDeleteFolder}
                handleUpdateFolder={handleUpdateFolder}
                user={user}
                songs={songs}
                setSongs={setSongs}
                />)})}
                
        </ul> 
    )} 
    // else {
    //   <ul>
    //         <FolderCard
    //             folder={folders}
    //             handleDeleteFolder={handleDeleteFolder}
    //             handleUpdateFolder={handleUpdateFolder}
    //             user={user}
    //             songs={songs}
    //             setSongs={setSongs}
    //             />
    //   </ul>
    // }
}