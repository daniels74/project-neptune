import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const myClick = () => console.log("BabyGirl");
  // const emailMe = () => {
  //   window.location = "../Pages/Blank";
  // }
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      
      <nav className='navbar'>
        
        <div className='navbar-container'>
          
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Landscapes 
          <FontAwesomeIcon icon={"gem"}></FontAwesomeIcon>
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? "xmark" : "bars"}></FontAwesomeIcon>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='Projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='Slide' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>

            <li>
              <Link to='Email' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact now
              </Link>
            </li>

          </ul>

          {button && <Button buttonStyle='btn--outline--solid' onClick={myClick}> CONTACT NOW </Button>}
        
        </div>
      
      </nav>
    
    </>
  );
}

export default Navbar;