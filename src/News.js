import React, { useState, useEffect } from 'react';

const apiKey = '85319fd0e6b341d18bbbfdf59e717efd'; // Replace with your News API key

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch news data from the News API when the component mounts

    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;