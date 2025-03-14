import { Routes, Route, useParams } from 'react-router';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from "./components/Footer";
import './library.css';

const NewsWithCategory = ({ searchQuery, darkMode }) => {
  const { category } = useParams(); 
  return <News category={category || "general"} onSearch={searchQuery} darkMode={darkMode} />;
};

function App() {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleCategoryClick = () => {
    setSearchQuery(""); }

  return (     
      <>
        <Navbar onSearch={setSearchQuery} onCategory={handleCategoryClick} darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<NewsWithCategory searchQuery={searchQuery} />} />
          <Route path="/:category" element={<NewsWithCategory searchQuery={searchQuery} />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
