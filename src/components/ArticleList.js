import React from "react";
import Article from "./Article";

function ArticleList({ posts }){
    const articleArray = posts.map(post => {
        return (
        <Article 
        title={post.title}
        date={post.date}
        preview={post.preview}
        key={post.id}
        minutes={post.minutes}
        />
        );
    });
    return(
        <main>
          {articleArray}
        </main>
    );
}

export default ArticleList;