import React, {useState} from "react"

export default function FolderCard({ songs, user, folder, handleDeleteFolder, handleUpdateFolder}) {
    const [updatedName, setUpdatedName] = useState("")
    // const [updatedDetails, setUpdatedDetails] = useState("") same purpose as before

    const { id, name } = folder

    function handleDeleteFolderClick() {
        fetch(`/folders/${id}`, {
          method: "DELETE",
        });
    
        handleDeleteFolder(id);
      }
    
    function handleUpdateFolderSubmit(e){
        e.preventDefault()
        fetch(`/folders/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                name: updatedName,
                // details: updatedDetails
            }),
        })
        .then((r) => r.json())
        .then((updatedFolder) => {
            handleUpdateFolder(updatedFolder)
        })
    }
//NEED TO ADD A BUTTON TO DELETE SONGS FROM FOLDERS IN HERE OR IN A NEW LOWER COMPONENT
    return (
        <li className="card">
            
          <p>{name}</p>
          {/* <p>{details}</p> */}
          <button onClick={handleDeleteFolderClick}>Delete</button>
          <form onSubmit={handleUpdateFolderSubmit}>
            <input
              type="text"
              placeholder=":}"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            {/* <input
              type="text"
              placeholder=":{"
              value={updatedDetails}
              onChange={(e) => setUpdatedDetails(e.target.value)}
            /> */}
            <button type="submit">Edit me</button>
    
          </form>
                {songs.map((song) => {
                 if(song.folder_id===id) {
                  return (
                  
         
            <p key={song.id}> {song.title} {song.artist} {song.album}</p> 
    
          )}
          })}
          
        </li>
      );

}