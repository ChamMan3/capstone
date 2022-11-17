import React, {useState, useEffect} from "react";
import IndividualSongs from "./IndividualSongs"


export default function IndividualFolder({clickedFolder, user, folders, setSearchedSong}){

const [songsInFolder, setSongsInFolder] = useState([])



    

useEffect(() => {
    fetch(`http://localhost:3000/folders/${clickedFolder.id}`)
    .then(response=> response.json())
    .then(data=> {
        console.log(data.songs[0])
        setSongsInFolder(data.songs)
        console.log(songsInFolder)
    })
}, [])

return(
    <IndividualSongs songsInFolder={songsInFolder} setSearchedSong={setSearchedSong}/>
)


}

