import React, {useState} from "react"

export default function FolderForm({user, handleCreateFolder}){
    const [name, setFolderName] = useState('')
    const [details, setDetails] = useState('') 

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/folders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            
            title: name,
            details: details,
            user_id: user.id
            
          }),
        })
          .then((r) => r.json())
          .then((newFolder) => {
          console.log(newFolder)
          handleCreateFolder(newFolder)
          
        });
    }

    return(
        <>
        <div class="folder">
          <h3 class="folderH3"> Make a Folder! </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Folder Name"
                value={name}
                onChange={(e) => setFolderName(e.target.value)}
              />
              <input
                type="text"
                name="details"
                placeholder= "Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
              <button type="submit">Create Folder</button>
            </form>
            </div>
          </>
        )
      }