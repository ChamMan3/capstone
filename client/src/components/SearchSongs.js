import React from "react"
import {useNavigate} from "react-router-dom"

export default function SearchSongs({songs, setSearchedSong}) {

let navigate = useNavigate()

function showLyrics(data) {

}


function handleClick(e){
        console.log(e.target.value)
        setSearchedSong(e.target.value)
        navigate(`/lyrics`)
    }


    if (songs.length === 5){

    return(
        <> 
            <div value={songs[0].track.key}>
                <p>{songs[0].track.title}</p>
                <p>by: {songs[0].track.subtitle}</p>
                <img alt="song pic" src = {songs[0].track.images.coverart}/>
                <button value={songs[0].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            <div>
                <p>{songs[1].track.title}</p>
                <p>by: {songs[1].track.subtitle}</p>
                <img alt="song pic" src = {songs[1].track.images.coverart}/>
                <button value={songs[1].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            <div>
                <p>{songs[2].track.title}</p>
                <p>by: {songs[2].track.subtitle}</p>
                <img alt="song pic" src = {songs[2].track.images.coverart}/>
                <button value={songs[2].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            <div>
                <p>{songs[3].track.title}</p>
                <p>by: {songs[3].track.subtitle}</p>
                <img alt="song pic" src = {songs[3].track.images.coverart}/>
                <button value={songs[3].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            <div>
                <p>{songs[4].track.title}</p>
                <p>by: {songs[4].track.subtitle}</p>
                <img alt="song pic" src = {songs[4].track.images.coverart}/>
                <button value={songs[4].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
        </>
    )}
    else if(songs.length===4) {
        return(
            <>
            <div>
                <p>{songs[0].track.title}</p>
                <p>by: {songs[0].track.subtitle}</p>
                <img alt="song pic" src = {songs[0].track.images.coverart}/>
                <button value={songs[0].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            <div>
                <p>{songs[1].track.title}</p>
                <p>by: {songs[1].track.subtitle}</p>
                <img alt="song pic" src = {songs[1].track.images.coverart}/>
                <button value={songs[1].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            <div>
                <p>{songs[2].track.title}</p>
                <p>by: {songs[2].track.subtitle}</p>
                <img alt="song pic" src = {songs[2].track.images.coverart}/>
                <button value={songs[2].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            <div>
                <p>{songs[3].track.title}</p>
                <p>by: {songs[3].track.subtitle}</p>
                <img alt="song pic" src = {songs[3].track.images.coverart}/>
                <button value={songs[3].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            </>
        )
    }
    else if (songs.array===3) {
        return(
            <>
            <div>
                <p>{songs[0].track.title}</p>
                <p>by: {songs[0].track.subtitle}</p>
                <img alt="song pic" src = {songs[0].track.images.coverart}/>
                <button value={songs[0].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            <div>
                <p>{songs[1].track.title}</p>
                <p>by: {songs[1].track.subtitle}</p>
                <img alt="song pic" src = {songs[1].track.images.coverart}/>
                <button value={songs[1].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            <div>
                <p>{songs[2].track.title}</p>
                <p>by: {songs[2].track.subtitle}</p>
                <img alt="song pic" src = {songs[2].track.images.coverart}/>
                <button value={songs[2].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            </>
        )
    }
    else if (songs.array===2) {
        return(
            <>
            <div>
                <p>{songs[0].track.title}</p>
                <p>by: {songs[0].track.subtitle}</p>
                <img alt="song pic" src = {songs[0].track.images.coverart}/>
                <button value={songs[0].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            <div>
                <p>{songs[1].track.title}</p>
                <p>by: {songs[1].track.subtitle}</p>
                <img alt="song pic" src = {songs[1].track.images.coverart}/>
                <button value={songs[1].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            </>
        )
    }
    else if (songs.array===1) {
        return(
            <>
            <div>
                <p>{songs[0].track.title}</p>
                <p>by: {songs[0].track.subtitle}</p>
                <img alt="song pic" src = {songs[0].track.images.coverart}/>
                <button value={songs[0].track.key} onClick={handleClick} >Show Lyrics</button>
            </div>
            </>
        )
    }
    else {return null}

}

