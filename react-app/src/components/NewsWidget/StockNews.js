import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StockNews.css";

function StockNews({ ticker }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${ticker}&apiKey=0352990303c5461f8e627cf61ec6b6bc`
        );

        if (response.data && response.data.articles) {
          setNews(response.data.articles.slice(0,3));
        }
      } catch (error) {
        console.error("Error fetching stock news:", error);
      }
    }

    fetchNews();
  }, [ticker]);

  const getTimeSincePost = (publishedAt) => {
    const now = new Date();
    const postDate = new Date(publishedAt);
    const diffInMilliseconds = Math.abs(now - postDate);
    const minutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) {
      return `${minutes}m`;
    } else if (hours < 24) {
      return `${hours}h`;
    } else {
      return `${days}d`;
    }
  };

  return (
    <div className="stock-news-container">
    <h3 className="stock-news-heading">Stock News</h3>
    <div className="stock-news-grid">
        {news.map((article) => (
          <div key={article.url} className="stock-news-article">
            {article.urlToImage && (
              <img src={article.urlToImage} alt="Article" className="stock-news-image" />
            )}
            <div className="stock-news-details">
              <h3 className="stock-news-title">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h3>
              <p className="stock-news-time">
                {getTimeSincePost(article.publishedAt)}
              </p>
              <p className="stock-news-source">
                Source: <span>{article.source.name}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StockNews;