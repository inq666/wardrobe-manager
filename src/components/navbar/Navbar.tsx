import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">Wardrobe Manager</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavLink className="nav-link nav-item" to="/allClothes">All clothes</NavLink>
            <NavLink className="nav-link nav-item" to="/collectOutfit">Сollect outfit</NavLink>
            <NavLink className="nav-link nav-item" to="/outfits">Outfits</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
