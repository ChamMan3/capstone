import React, {useEffect} from "react"
import FolderList from "./FolderList"
import FolderForm from "./FolderForm"
export default function Folders ({user, folders, setFolders, songs, setSongs, setClickedFolder}) {



    function handleCreateFolder(newFolder) {
       
            const updatedFoldersArray = [...folders, newFolder];
               setFolders(updatedFoldersArray);
      }

      function handleUpdateFolder(updatedFolder) {
        const updatedFoldersArray = folders.map((folder) => {
          if (folder.id === updatedFolder.id) {
            return updatedFolder;
          } else {
            return folder;
          }
        });
        setFolders(updatedFoldersArray);
      }

      function handleDeleteFolder(id) {
        const updatedFoldersArray = folders.filter((folder) => folder.id !== id);
        setFolders(updatedFoldersArray);
      }

    return(
        <div>
            
            <FolderForm user={user} handleCreateFolder={handleCreateFolder}/>
            <br></br>
            <br></br>
            <br></br>
            <FolderList user={user} folders={folders} handleDeleteFolder={handleDeleteFolder} handleUpdateFolder={handleUpdateFolder} songs={songs} setSongs={setSongs} setClickedFolder={setClickedFolder}/>
        </div>
    )
}