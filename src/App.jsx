import { Routes, Route, useParams } from 'react-router';
import {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import './library.css';

const NewsWithCategory = ({ searchQuery }) => {
  const { category } = useParams(); 
  return <News category={category || "general"} onSearch={searchQuery} />;
};

function App() {
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = () => {
    setSearchQuery(""); }

  return (
      <>
        <Navbar onSearch={setSearchQuery} onCategory={handleCategoryClick} />
        <Routes>
          <Route path="/" element={<NewsWithCategory searchQuery={searchQuery} />} />
          <Route path="/:category" element={<NewsWithCategory searchQuery={searchQuery} />} />
        </Routes>
      </>
  );
}

export default App;
