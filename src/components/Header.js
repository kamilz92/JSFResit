import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item"><Link className="header__link" to="/">Home</Link></li>
          <li className="header__item"><Link className="header__link" to="/grass">Grass</Link></li>
          <li className="header__item"><Link className="header__link" to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
