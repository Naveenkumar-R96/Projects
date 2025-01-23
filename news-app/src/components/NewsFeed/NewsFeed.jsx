import React from "react";
import { useNewsContext } from "../Context/Context";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsFeed.css"
const NewsFeed = () => {
  const { articles, loading, error } = useNewsContext();
  return (
    <div className="news-feed">
      {articles.length === 0 ? (
        <p className="no-news">No news found , Please trt again later</p>
      ) : (
        <div className="news-grid">
            {articles.map((article,index)=>{
                return (
                    <NewsCard key={index} article={article}/>
                )
            })}
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
