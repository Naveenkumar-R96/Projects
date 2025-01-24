import React from "react";
import { useNewsContext } from "../Context/Context";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsFeed.css";
import Loader from "../loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Pagination from "../Pagination/Pagination";
const NewsFeed = () => {
  const {
    articles,
    loading,
    error,
    currentPage,
    setCurrentPage,
    totalResults,
  } = useNewsContext();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="news-feed">
      {articles.length === 0 ? (
        <p className="no-news">No news found , Please trt again later</p>
      ) : (
        <>
          <div className="news-grid">
            {articles.map((article, index) => {
              return <NewsCard key={index} article={article} />;
            })}
          </div>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalResults={totalResults}/>
        </>
      )}
    </div>
  );
};

export default NewsFeed;
