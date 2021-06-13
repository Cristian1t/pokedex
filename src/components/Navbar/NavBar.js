import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavBar } from './style';

function NavBar() {
  return (
    <StyledNavBar>
      <ul>
        <li className="navhome">
          <Link to="/">Home</Link>
        </li>
        <li className="navcollection">
          <Link to="/collection">Collection</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
}

export default NavBar;
