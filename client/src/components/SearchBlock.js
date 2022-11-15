import React from "react"
import SearchArtists from "./SearchArtists"
import SearchSongs from "./SearchSongs"

export default function SearchBlock({songs, artists, setSearchedSong}) {

    return (
        <>
        <SearchArtists artists={artists}/>
        <SearchSongs songs={songs} setSearchedSong={setSearchedSong}/>
        </>
    )
}