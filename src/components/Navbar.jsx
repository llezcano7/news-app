import './Navbar.css';
import { Link } from 'react-router';
import { useState } from 'react';

const Navbar = ({ onSearch, onCategory }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (onSearch && search.trim() !== "") {
      onSearch(search);
    }
  };

  
  return (
  
    <header className='header-container container display-flex flex-between align-center width-1 height-4 sticky bg-3 border-bottom'>
      <img className='logo-1 container' src="/news-app-logo.jpg" alt="Logo principal de News APP" />
      <nav className="navbar navbar span:hover">
         <Link className='mayus' to="/business" onClick={onCategory} >Business</Link>
         <Link className='mayus'  to="/entertainment" onClick={onCategory}>Entertainment</Link>
         <Link className='mayus' to="/health" onClick={onCategory}>Health</Link>
         <Link className='mayus' to="/science" onClick={onCategory}>Science</Link>
         <Link className='mayus' to="/sports" onClick={onCategory}>Sports</Link>
         <Link className='mayus' to="/technology" onClick={onCategory}>Technology</Link>
     </nav>
     <form onSubmit={handleSearch} className="display-flex">
        <input className="input-1"
          type="text"
          placeholder="Search News..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn mg-left-1" type="submit"> Search </button>
      </form>
    </header>
   
  );

}
export default  Navbar;
