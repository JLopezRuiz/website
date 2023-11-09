import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Cancel from '../../assets/icons/Cancel.svg';
import WhiteMenuBar from '../../assets/icons/WhiteMenuBar.svg';
// import ProfilePic from '../../assets/images/profile-pic.png';
import styles from './Navbar.module.scss';

// TODO: make navbar transparent?, and pop-up on mouse over
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles['navbar-container']}>
          <div className={styles['navbar-logo']}>
            {/* <img src={ProfilePic} alt="me, smiling with a pink bucket hat" className={styles['profile-pic']} /> */}
            Jackeline Lopez Ruiz
          </div>
          <div onClick={handleClick}>
            <img src={click ? Cancel : WhiteMenuBar} alt="cancel icon" className={styles['menu-icon']} aria-label='menu' />
          </div>
          <ul className={click ? styles['nav-menu-active'] : styles['nav-menu']}>
            <li className={styles['nav-item']} aria-label='home'>
              <HashLink smooth to="/#" className={styles['nav-links']} onClick={closeMobileMenu}>
                Home
              </HashLink>
            </li>
            <li className={styles['nav-item']} aria-label='experience section'>
              <HashLink 
              to="/#experienceSection" 
              className={styles['nav-links']} 
              onClick={closeMobileMenu}
              smooth 
              duration={500}>
                Experience
              </HashLink>
            </li>
            <li className={styles['nav-item']} aria-label='about page'>
              <HashLink to="/about#top" smooth className={styles['nav-links']} onClick={closeMobileMenu}>
                About
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
