import Newsitem from './Newsitem';
import { useState, useEffect } from 'react';


    const News = ({category, onSearch, darkMode}) => {
    const API_KEY = '90e7986adcbb45d2968aa139f91bac67';
    const [data, setData] = useState([]);
    
  
    const CALLAPI = async () => {
      const API_URL = onSearch ? `https://newsapi.org/v2/everything?q=${onSearch}&apiKey=${API_KEY}` : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
      let response = await fetch(API_URL);
      let data = await response.json();
      setData(data.articles);

    }; 
    useEffect(() => {
      CALLAPI();
    }, [category, onSearch]);
  
    return (
       <div className="news container grid grid-cols-4 gap-2 flex-center self-center alig-center m-block-3">
        { data.map((news, index) => {
          return (
            <Newsitem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
              darkMode={darkMode}
            />
          );
        })}
      </div>
     
    );
  };

  export default News;


  