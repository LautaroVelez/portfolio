import React from 'react';
import '../assets/styles/Nav.css';

const Nav = () => {
  return(
      <header className="header">
          <a href="" className="logo">Lautaro.dev</a>
          <nav className="navbar">
              <a href="/Home">Home</a>
              <a href="/About">About</a>
              <a href="/Projects">Projects</a>
              <a href="/Contact">Contact</a>
          </nav>
      </header>
  )
}

export default Nav;