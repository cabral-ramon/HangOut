import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => (
  <nav>
    <h1>HangOut</h1>
    <Link to={`/login`}>Login</Link>
    <Link to={`/signup`}>signup</Link>
  </nav>
);

export default NavBar;
