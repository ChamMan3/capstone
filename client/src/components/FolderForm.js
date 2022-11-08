import React, {useState} from "react"

export default function FolderForm({user, handleAddFolder}){
    const [folderName, setFolderName] = useState('')
    // const [details, setDetails] = useState('') might wanna add this guy as a description for individual folders

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/folders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            
            folderName: folderName,
            
          }),
        })
          .then((r) => r.json())
          .then((newFolder) => {
          console.log(newFolder)
          handleAddFolder(newFolder)
          
        });
    }

    return(
        <>
          <h3> Make a Folder! </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Folder Name"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
              />
              {/* <input
                type="text"
                name="details"
                placeholder="Event Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              /> */}
              <button type="submit">Create Folder</button>
            </form>
          </>
        )
      }