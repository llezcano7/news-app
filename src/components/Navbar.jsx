import './Navbar.css';
import { Link } from 'react-router';
import { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(search);
    }
  };

  
  return (
    <header className='header-container'>
      <img className='logo' src="/NewsAPP-Logo.png" alt="Logo prinicpal de NewsAPP" />
      <nav className="navbar">
         <Link to="/negocios">Negocios</Link>
         <Link to="/entretenimiento">Entretenimiento</Link>
         <Link to="/salud">Salud</Link>
         <Link to="/ciencia">Ciencia</Link>
         <Link to="/deportes">Deportes</Link>
         <Link to="/tecnologia">Tecnología</Link>
     </nav>
     <div className='search-container'>
     <input
          type='text'
          placeholder='Buscar noticias'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='btn' onClick={handleSearch}>Buscar</button>
      </div>
    </header>
  );

}
export default  Navbar;