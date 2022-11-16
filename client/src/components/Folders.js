import React, {useEffect} from "react"
import FolderList from "./FolderList"
import FolderForm from "./FolderForm"
export default function Folders ({user, folders, setFolders, songs, setSongs}) {



    function handleCreateFolder(newFolder) {
        // if (folders === []) {setFolders(newFolder) }
            const updatedFoldersArray = [...folders, newFolder];
               setFolders(updatedFoldersArray);
      }

      // const updatedFoldersArray = [...user.folders, newFolder];
      // setFolders(updatedFoldersArray);

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


      //Most function in page were taken from the Events component from Phase 4 Project and modified


    return(
        <div>
            
            <FolderForm user={user} handleCreateFolder={handleCreateFolder}/>
            <FolderList user={user} folders={folders} handleDeleteFolder={handleDeleteFolder} handleUpdateFolder={handleUpdateFolder} songs={songs} setSongs={setSongs}/>
        </div>
    )
}