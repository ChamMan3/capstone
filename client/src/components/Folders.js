import React from "react"
import FolderList from "./FolderList"
import FolderForm from "./FolderForm"
export default function Folders ({user, folders, setFolders, songs, setSongs}) {

    function handleCreateFolder(newFolders) {
        const updatedFoldersArray = [...user.folders, newFolders];
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
        setEvents(updatedFoldersArray);
      }

      function handleDeleteFolder(id) {
        const updatedFoldersArray = user.events.filter((event) => event.id !== id);
        setFolders(updatedFoldersArray);
      }


      //Most function in page were taken from the Events component from Phase 4 Project and modified


    return(
        <>
            <FolderList user={user} folders={folders} handleDeleteFolder={handleDeleteFolder} handleUpdateFolder={handleUpdateFolder} songs={songs} setSongs={setSongs}/>
            <FolderForm user={user} handleCreateFolder={handleCreateFolder}/>
        </>
    )
}