import React, {useState} from "react"

export default function LyricCard({details, lyrics, folders, user}){
  const [id, setID] = useState(0)


let genre = details[0]
let img = details[1]
let key = details[2]
let title = details[3]
let artist = details[4]

function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        artist: artist,
        title: title,
        image: img,
        genre: genre,
        shazam_id: key,
        lyrics: lyrics,
        folder_id: id
        
      }),
    })
      .then((r) => r.json())
      .then((newSong) => {
      console.log(newSong)
    });
}

    return(
        <>
                <p>Song: {title}</p>
                <p>By: {artist}</p>
                <p>Genre: {genre}</p>
                <img class="coverart" src={img} alt={title}/>
                <p class="lyrics">{lyrics}</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="number"
                    placeholder="Folder ID"
                    value={id}
                    onChange={(e) => setID(e.target.value)}
                    />
                    <button type="submit"> Save Song </button>
                </form>
                {user ?  
                
                <p>Folder Name: "{folders[0].title}" Folder ID: {folders[0].id} </p>
                    
                : null }
                
                
            
        </>
    )
}