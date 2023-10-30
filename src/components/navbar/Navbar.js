import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Cancel from '../../assets/icons/Cancel.svg';
import WhiteMenuBar from '../../assets/icons/WhiteMenuBar.svg';
import ProfilePic from '../../assets/images/profile-pic.png';
import styles from './Navbar.module.scss';

// TODO: make navbar transparent?, and pop-up on mouse over
// DEBUG: link to Experience doesn't work when on a different page
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles['navbar-container']}>
          <div className={styles['navbar-logo']}>
            <img src={ProfilePic} alt="me, smiling with a pink bucket hat" className={styles['profile-pic']} />
            Jackeline Lopez Ruiz
          </div>
          <div onClick={handleClick}>
            <img src={click ? Cancel : WhiteMenuBar} alt="cancel icon" className={styles['menu-icon']} />
          </div>
          <ul className={click ? styles['nav-menu-active'] : styles['nav-menu']}>
            <li className={styles['nav-item']}>
              <Link to="/" className={styles['nav-links']} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <Link to="/about" className={styles['nav-links']} onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <ScrollLink 
              to="experienceSection" 
              className={styles['nav-links']} 
              onClick={closeMobileMenu} 
              spy={true} 
              smooth={true} 
              duration={500}>
                Experience
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
