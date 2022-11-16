import React, {useEffect, useState} from "react"
import LyricCard from "./LyricCard"


export default function Lyrics ({searchedSong, details, setDetails, folders, user}) {
    const [lyrics, setLyrics] = useState([])

    function whatIWant(data) {
        let myThings = [];
        let genre = data.genres.primary;
        let image = data.images.coverart;
        let key = data.key;
        let title = data.title;
        let artist = data.subtitle;
        myThings.push(genre, image, key, title, artist)
        return (
            setDetails(myThings)
        )
    }

    function giveSpace(array) {
        // let newArray=[]
        
        // for (const property in array) {
        //     newArray.push(`${array[property]} `);
        //   }
        for (let i=0 ; i < array.length; i++)
            // console.log(newArray)
            //console.log(text += "The number is " + array[i])
            // array[i] + "<br>"
            // return setLyrics(newArray)
            return (<p>${array[i]}</p>)
    }
    
    
    useEffect(() => { 

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '29550575d9msh09bfd328bb8979fp121b47jsn7b66b54a5258',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };

        fetch(`https://shazam.p.rapidapi.com/songs/get-details?key=${searchedSong}&locale=en-US`, options)
        .then(response => response.json())
        .then(response => {
            //console.log(response)
            whatIWant(response)
            giveSpace(response.sections[1].text)
            
        })
     }, [])


    return(
        <>
        
            <LyricCard details={details} lyrics={lyrics} folders={folders} user={user} />
        
        </>
        )


}