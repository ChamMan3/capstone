import React, {useState} from "react"

// import SearchSongs from "./SearchSongs";
// import SearchArtists from "./SearchArtists";
import SearchBlock from "./SearchBlock"

export default function Search ({searchTerm, setSearchTerm, setSearchedSong}) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [songs, setSongs] = useState([])
    const [artists, setArtists] = useState([])
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '29550575d9msh09bfd328bb8979fp121b47jsn7b66b54a5258',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
function handleClick(){
    fetch(`https://shazam.p.rapidapi.com/search?term=${searchTerm}&locale=en-US&offset=0&limit=5`, options)
        .then(response => response.json())
        .then(response => {
            
            setIsLoaded(true)
            setSongs(response.tracks.hits)
            setArtists(response.artists.hits)
        })
        .catch(err => {
            console.error(err)
            setIsLoaded(true)
            setError(error)
        });
    }

    return (
        <div className="searchbar">
          <label htmlFor="search">Search Tracks:</label>
          <input
            type="text"
            id="search"
            placeholder="Type a name to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleClick}>Search</button>
          <SearchBlock songs={songs} artitsts={artists} setSearchedSong={setSearchedSong}/>
        </div>
      );
}
