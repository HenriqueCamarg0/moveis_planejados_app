import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="logo">Móveis Planejados</h1>
        <nav className="header-nav">
          <NavLink 
            to="/home" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
          <NavLink 
            to="/sobre" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Sobre
          </NavLink>
          <NavLink 
            to="/galeria" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Galeria
          </NavLink>
          <NavLink 
            to="/contato" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;