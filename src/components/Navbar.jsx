import { Link } from 'react-router';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";


const Navbar = ({ onSearch, onCategory, darkMode, setDarkMode }) => {
  const toggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); 


  const handleSearch = (e) => {
    e.preventDefault(); 
    if (onSearch && search.trim() !== "") {
      onSearch(search);
    }
  };

  
  return (
  
<header className={`header-container ${darkMode ? "dark" : ""} container display-flex flex-between flex-center align-center width-1 height-auto sticky bg-3 border-bottom`}>
      <button onClick={toggle} className="toggle-btn display-flex flex-column">
        {darkMode ? <BsMoonStarsFill className='moon' /> : <BsSunFill className='sun' />}
      </button>
       <Link to="/general">
          <img className='logo' src={darkMode ? "/news-app-logo-dark.jpg" : "/news-app-logo.jpg"}  alt="Logo principal de News APP" />
       </Link>
         <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu />
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onSearch={onSearch} />
         </div>
      
      <nav className="navbar pd-inline-1 navbar span:hover">
         <Link className='mayus' to="/business" onClick={onCategory} >Business</Link>
         <Link className='mayus'  to="/entertainment" onClick={onCategory}>Entertainment</Link>
         <Link className='mayus' to="/health" onClick={onCategory}>Health</Link>
         <Link className='mayus' to="/science" onClick={onCategory}>Science</Link>
         <Link className='mayus' to="/sports" onClick={onCategory}>Sports</Link>
         <Link className='mayus' to="/technology" onClick={onCategory}>Technology</Link>
     </nav>
     <form onSubmit={handleSearch} className="form display-flex">
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
