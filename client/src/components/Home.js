import React, {useEffect} from "react";
import ArticleForm from "./ArticleForm";
import ArticleList from "./ArticleList"
export default function Home({user, articles, setArticles}){

    useEffect(() => {
    fetch("http://localhost:3000/articles")
    .then(response=> response.json())
    .then(data=> {
        setArticles(data)
        // handleFetch(data[0])
    })
}, [])

// function handleFetch(data){
//     data.title
// }   


    return (
        <>
            <p>Welcome to Genie!</p>
            <ArticleList/>
            <ArticleForm/>
            
        </>
    )
}