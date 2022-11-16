import React from "react";
import ArticleForm from "./ArticleForm";
import ArticleList from "./ArticleList"
export default function Home({user, articles, setArticles}){

    fetch("http://localhost:3000/articles")
    .then(response=> response.json())
    .then(data=> {
        setArticles(data)
    })



    return (
        <>
            <p>Welcome to Genie!</p>
            <ArticleList/>
            <ArticleForm/>
            
        </>
    )
}