import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"


export default function IndividualFolder({clickedFolder, user, folders}){

const [SongsInFolder, setSongsInFolder] = useState([])

let navigate = useNavigate()

useEffect(() => {
    fetch(`http://localhost:3000/folders/${clickedFolder}`)
    .then(response=> response.json())
    .then(data=> {
        console.log(data)
        setSongsInFolder(data.songs)
    })
}, [])

return (
    <>
    {clickedFolder === folders.id ? 
        <p>hey</p>
    :
        <p>Inside a folder</p>}
        </>)
}