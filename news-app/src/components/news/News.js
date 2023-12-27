import React, { useEffect, useState } from "react";

import "./News.css";

const News = () => {
  const [myNews, setMyNews] = useState([]);
  

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=5ccb716a41d742d3888b6c52dbd13407"
      );
      let data = await response.json();
      setMyNews(data.articles);
      window.history.back();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mainDiv">
      {myNews.map((article, index) => (
        <div className="news-card" key={index}>
          {article.urlToImage && ( // Check if urlToImage is available
            <img
              src={article.urlToImage}
              className="card-img-top"
              alt="Article"
            />
          )}
          <div className="news-card-content">
            <h5 className="news-card-title">{article.title}</h5>
            <p className="news-card-author">By {article.author}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary news-card-link"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;

