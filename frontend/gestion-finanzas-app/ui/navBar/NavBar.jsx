import  { useState, useEffect, useRef } from 'react';
import './NavBar.css';

export const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    //Listener para clics fuera del menú
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Limpia el listener cuando el componente se desmonte
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="menu">
      <a href="#" className="nav-link">Home</a>
      <a href="#" className="nav-link">Gestión</a>
      <a href="#" className="nav-link">Gráfico</a>
      <div className="nav-link user-menu" onClick={toggleMenu} ref={menuRef}>
        Usuario
        {isMenuOpen && (
          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">Perfil 1</a>
            <a href="#" className="dropdown-item">Perfil 2</a>
            <a href="#" className="dropdown-item">Crear nuevo perfil</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
