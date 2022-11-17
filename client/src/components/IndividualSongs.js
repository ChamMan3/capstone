import React from "react";
import { useNavigate } from "react-router";

export default function IndividualSongs({songsInFolder, setSearchedSong}){

    let navigate = useNavigate()
    
function handleClick(e){
    setSearchedSong(e.target.value)
    navigate(`/lyrics`)
}


    if(songsInFolder.length===5){
        return(
            <> 
                <div class="songs" value={songsInFolder[0].shazam_id}>
                    <p>{songsInFolder[0].title}</p>
                    <p>by: {songsInFolder[0].artist}</p>
                    <p> Genre: {songsInFolder[0].genre}</p>
                    <img alt="song pic" src = {songsInFolder[0].image}/>
                    <button value={songsInFolder[0].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
                <div class="songs" value={songsInFolder[1].shazam_id}>
                    <p>{songsInFolder[1].title}</p>
                    <p>by: {songsInFolder[1].artist}</p>
                    <p> Genre: {songsInFolder[1].genre}</p>
                    <img alt="song pic" src = {songsInFolder[1].image}/>
                    <button value={songsInFolder[1].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
                <div class="songs" value={songsInFolder[2].shazam_id}>
                    <p>{songsInFolder[2].title}</p>
                    <p>by: {songsInFolder[2].artist}</p>
                    <p> Genre: {songsInFolder[2].genre}</p>
                    <img alt="song pic" src = {songsInFolder[2].image}/>
                    <button value={songsInFolder[2].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
                <div class="songs" value={songsInFolder[3].shazam_id}>
                    <p>{songsInFolder[3].title}</p>
                    <p>by: {songsInFolder[3].artist}</p>
                    <p> Genre: {songsInFolder[3].genre}</p>
                    <img alt="song pic" src = {songsInFolder[3].image}/>
                    <button value={songsInFolder[3].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
                <div class="songs" value={songsInFolder[4].shazam_id}>
                    <p>{songsInFolder[4].title}</p>
                    <p>by: {songsInFolder[4].artist}</p>
                    <p> Genre: {songsInFolder[4].genre}</p>
                    <img alt="song pic" src = {songsInFolder[4].image}/>
                    <button value={songsInFolder[4].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
            </>
        )} 
    else if(songsInFolder.length===4) {
        return(
            <>
            <div class="songs" value={songsInFolder[0].shazam_id}>
                    <p>{songsInFolder[0].title}</p>
                    <p>by: {songsInFolder[0].artist}</p>
                    <p> Genre: {songsInFolder[0].genre}</p>
                    <img alt="song pic" src = {songsInFolder[0].image}/>
                    <button value={songsInFolder[0].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
                <div class="songs" value={songsInFolder[1].shazam_id}>
                    <p>{songsInFolder[1].title}</p>
                    <p>by: {songsInFolder[1].artist}</p>
                    <p> Genre: {songsInFolder[1].genre}</p>
                    <img alt="song pic" src = {songsInFolder[1].image}/>
                    <button value={songsInFolder[1].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
                <div class="songs" value={songsInFolder[2].shazam_id}>
                    <p>{songsInFolder[2].title}</p>
                    <p>by: {songsInFolder[2].artist}</p>
                    <p> Genre: {songsInFolder[2].genre}</p>
                    <img alt="song pic" src = {songsInFolder[2].image}/>
                    <button value={songsInFolder[2].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
                <div class="songs" value={songsInFolder[3].shazam_id}>
                    <p>{songsInFolder[3].title}</p>
                    <p>by: {songsInFolder[3].artist}</p>
                    <p> Genre: {songsInFolder[3].genre}</p>
                    <img alt="song pic" src = {songsInFolder[3].image}/>
                    <button value={songsInFolder[3].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
            </>
        )
    }
    else if (songsInFolder.length===3) {
        return(
            <>
            <div class="songs" value={songsInFolder[0].shazam_id}>
                    <p>{songsInFolder[0].title}</p>
                    <p>by: {songsInFolder[0].artist}</p>
                    <p> Genre: {songsInFolder[0].genre}</p>
                    <img alt="song pic" src = {songsInFolder[0].image}/>
                    <button value={songsInFolder[0].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
                <div class="songs" value={songsInFolder[1].shazam_id}>
                    <p>{songsInFolder[1].title}</p>
                    <p>by: {songsInFolder[1].artist}</p>
                    <p> Genre: {songsInFolder[1].genre}</p>
                    <img alt="song pic" src = {songsInFolder[1].image}/>
                    <button value={songsInFolder[1].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
                <div class="songs" value={songsInFolder[2].shazam_id}>
                    <p>{songsInFolder[2].title}</p>
                    <p>by: {songsInFolder[2].artist}</p>
                    <p> Genre: {songsInFolder[2].genre}</p>
                    <img alt="song pic" src = {songsInFolder[2].image}/>
                    <button value={songsInFolder[2].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
            </>
        )
    }
    else if (songsInFolder.length===2) {
        return(
            <>
                <div class="songs" value={songsInFolder[0].shazam_id}>
                    <p>{songsInFolder[0].title}</p>
                    <p>by: {songsInFolder[0].artist}</p>
                    <p> Genre: {songsInFolder[0].genre}</p>
                    <img alt="song pic" src = {songsInFolder[0].image}/>
                    <button value={songsInFolder[0].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
                <div class="songs" value={songsInFolder[1].shazam_id}>
                    <p>{songsInFolder[1].title}</p>
                    <p>by: {songsInFolder[1].artist}</p>
                    <p> Genre: {songsInFolder[1].genre}</p>
                    <img alt="song pic" src = {songsInFolder[1].image}/>
                    <button value={songsInFolder[1].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
            </>
        )
    }
    else if (songsInFolder.length===1) {
        return(
            <>
            <div class="songs" value={songsInFolder[0].shazam_id}>
                    <p>{songsInFolder[0].title}</p>
                    <p>by: {songsInFolder[0].artist}</p>
                    <p> Genre: {songsInFolder[0].genre}</p>
                    <img alt="song pic" src = {songsInFolder[0].image}/>
                    <button value={songsInFolder[0].shazam_id} onClick={handleClick} >Show Lyrics</button>
                </div>
            </>
        )
    }
    else {
        return null}
}