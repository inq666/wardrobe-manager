import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">Wardrobe Manager</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <li><NavLink className="nav-link" to="/allClothes">All clothes</NavLink></li>
          </li>
          <li className="nav-item">
            <li><NavLink className="nav-link" to="/collectOutfit">Сollect outfit</NavLink></li>
          </li>
          <li className="nav-item">
            <li><NavLink className="nav-link" to="/outfits">Outfits</NavLink></li>
          </li>
        </ul>
      </div>
    </nav>
    /*     <nav>
          <div classNameName="nav-wrapper">

            <ul classNameName="left hide-on-med-and-down">



            </ul>
          </div>
        </nav> */
  );
};

export default Navbar;
