/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cancel from '../../assets/icons/Cancel.svg';
import WhiteMenuBar from '../../assets/icons/WhiteMenuBar.svg';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles['navbar-container']}>
          <Link to="/" className={styles['navbar-logo']} onClick={closeMobileMenu}>
            Jackeline&apos;s Data Bites
          </Link>
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
              <Link to="/tutoring" className={styles['nav-links']} onClick={closeMobileMenu}>
                CS Tutoring
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
