import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

export default function FolderCard({ songs, user, folder, handleDeleteFolder, handleUpdateFolder, setClickedFolder}) {
    const [updatedName, setUpdatedName] = useState("")
    const [updatedDetails, setUpdatedDetails] = useState("")
    const { id, title, details } = folder

    let navigate = useNavigate()

    function handleClick(){
      console.log(folder)
      setClickedFolder(folder)
      navigate(`/folder`)
  }


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

    return (
        <div className="card">
          <h1>{title}</h1>
          <p>{details}</p>
          <form onSubmit={handleUpdateFolderSubmit}>
            <input
              type="text"
              placeholder="Folder Name"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Folder Details"
              value={updatedDetails}
              onChange={(e) => setUpdatedDetails(e.target.value)}
            />
            <button type="submit">Edit me</button>

          </form>
          <br></br>
          

          <button value={folder} onClick={handleClick}>See Songs</button>
          <button onClick={handleDeleteFolderClick}>Delete Folder</button>
          
        </div>
      );

}