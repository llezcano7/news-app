import './News.css';
import Newsitem from './Newsitem';
import { useState, useEffect } from 'react';

    const News = () => {
    const API_KEY = '90e7986adcbb45d2968aa139f91bac67';
    const [data, setData] = useState([]);
    
  
    const CALLAPI = async () => {
      const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

      let response = await fetch(API_URL);
      let data = await response.json();
      setData(data.articles);
      console.log(data.articles);
    };
  
    useEffect(() => {
      CALLAPI();
    }, []);
  
    return (
      <div className="news">
        {data.map((news, index) => {
          return (
            <Newsitem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    );
  };
  
  export default News;
  