import React, {useEffect} from "react";
import ArticleForm from "./ArticleForm";
import ArticleList from "./ArticleList"
export default function Home({user, articles, setArticles}){

//     useEffect(() => {
//     fetch("http://localhost:3000/articles")
//     .then(response=> response.json())
//     .then(data=> {
//         setArticles(data)
//         // handleFetch(data[0])
//     })
// }, [])



    return (
        <>
            <h1>WELCOME!</h1>
            <p>This is Genie! A totally original website that certainly isn't an ugly step sister of genius.</p>
            <p>If you're a casual user then feel free to search away, but if you want access to exclusive features make an account!</p>
            <p>Also articles are supposed to exist here but like most things in this project they were giving me lots of problems!</p>
            <ArticleList/>
            <ArticleForm/>
            
        </>
    )
}