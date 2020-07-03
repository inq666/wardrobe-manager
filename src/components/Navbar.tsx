import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="container">
        <a href="#!" className="brand-logo center">Wardrobe Manager</a>
        <ul className="left hide-on-med-and-down">
          <li><a href="sass.html">All clothes</a></li>
          <li><a href="badges.html">Сollect outfit</a></li>
          <li><a href="collapsible.html">Add clothes</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
