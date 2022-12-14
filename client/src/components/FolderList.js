import React from "react"
import FolderCard from "./FolderCard"

export default function FolderList({user, folders, handleDeleteFolder, handleUpdateFolder, songs, setSongs, setClickedFolder}) {
     return (
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
                setClickedFolder={setClickedFolder}
                />)})}
                
        </ul> 
    ) 
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