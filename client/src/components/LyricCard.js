import React from "react"

export default function LyricCard({details, lyrics, folders, user}){
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
        lyrics: lyrics
        
      }),
    })
      .then((r) => r.json())
      .then((newSong) => {
      console.log(newSong)
    });
}

    return(
        <>

                <p>Genre: {genre}</p>
                <img src={img} alt={title}/>
                <p>{lyrics}</p>
                <p>Song: {title}</p>
                <p>By: {artist}</p>
                <form onSubmit={handleSubmit}>
                    <button type="submit"> Save Song </button>
                </form>
                
            
        </>
    )
}