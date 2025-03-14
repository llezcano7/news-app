import { Link } from "react-router";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import './MobileMenu.css'

const MobileMenu = ({ isOpen, onClose, onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && search.trim() !== "") {
      onSearch(search);
      onClose(); 
    }
  };
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className={`mobile-menu ${isOpen ? "open" : ""}`} 
      onClick={handleMenuClick}
    >
      <button className="menu-btn close-btn" onClick={onClose}>
        <AiOutlineClose />
      </button>

      <nav className="mobile-nav">
        <Link to="/general" onClick={onClose}>General</Link>
        <Link to="/business" onClick={onClose}>Business</Link>
        <Link to="/entertainment" onClick={onClose}>Entertainment</Link>
        <Link to="/health" onClick={onClose}>Health</Link>
        <Link to="/science" onClick={onClose}>Science</Link>
        <Link to="/sports" onClick={onClose}>Sports</Link>
        <Link to="/technology" onClick={onClose}>Technology</Link>
      </nav>

      <form onSubmit={handleSearch} className="mobile-search">
        <input 
          className="input-1"
          type="text"
          placeholder="Search News..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" type="submit">Search</button>
      </form>
    </div>
  );
};

export default MobileMenu;
