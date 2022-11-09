import React, {useState} from "react"

export default function FolderCard({ songs, user, folder, handleDeleteFolder, handleUpdateFolder}) {
    const [updatedName, setUpdatedName] = useState("")
    const [updatedDetails, setUpdatedDetails] = useState("")
    const { id, title, details } = folder

    function handleDeleteFolderClick() {
        fetch(`http://localhost:3000/folders/${id}`, {
          method: "DELETE",
        });
    
        handleDeleteFolder(id);
      }
    
    function handleUpdateFolderSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:3000/folders/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                title: updatedName,
                details: updatedDetails
            }),
        })
        .then((r) => r.json())
        .then((updatedFolder) => {
            handleUpdateFolder(updatedFolder)
        })
    }
//NEED TO ADD A BUTTON TO DELETE SONGS FROM FOLDERS IN HERE OR IN A NEW LOWER COMPONENT
    return (
        <div className="card">
          <p>{title}</p>
          <p>{details}</p>
          <button onClick={handleDeleteFolderClick}>Delete Folder</button>
          <form onSubmit={handleUpdateFolderSubmit}>
            <input
              type="text"
              placeholder=":}"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <input
              type="text"
              placeholder=":{"
              value={updatedDetails}
              onChange={(e) => setUpdatedDetails(e.target.value)}
            />
            <button type="submit">Edit me</button>
    
          </form>
                {/* {songs.map((song) => {
                 if(song.folder_id===id) {
                  return (
                  
         
            <p key={song.id}> {song.title} {song.artist} {song.album}</p> 
    
          )}
          })} */}
          
        </div>
      );

}