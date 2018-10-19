import React from 'react';
import { Link } from 'react-router-dom'
import styles from './../styles/Header.css';

const Header = () => {
  return(
    <header>
      <nav>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/about'>About</Link></div>  
        <div><Link to='/portfolio'>Portfolio</Link></div>
        <div><Link to='/contact'>Contact</Link></div>
      </nav>
    </header>
  )
}
  

export default Header;