import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Drop2 from './Drop2';
import styled from 'styled-components';

const Image=styled.img`
height:60px;
width:100%;
`;

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  const [click2, setClick2] = useState(false);
  const [drop2, setDrop2] = useState(false);

  const handleClick2 = () => setClick2(!click2);
  const closeMobileMenu2 = () => setClick2(false);

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDrop2(false);
    } else {
      setDrop2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDrop2(false);
    } else {
      setDrop2(false);
    }
  };
  

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <Image src="images/logo.png"></Image>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu2}
            >
              Products <i className='fas fa-caret-down' /> 
            </Link>
            {drop2 && <Drop2 />}
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
          </li>
        </ul>
        <Button />
        

      </nav>
    </>
  );
}

export default Navbar;
