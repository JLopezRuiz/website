import React from 'react';
import LinkedInIcon from '../../assets/icons/LinkedInIcon.svg';
import GithubIcon from '../../assets/icons/GithubIcon.svg';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles['footer-container']}>
    <div className={styles['social-icons']}>
      <a href="https://www.linkedin.com/in/jackeline-lopez-ruiz/" target="_blank" rel="noopener noreferrer">
        <img src={LinkedInIcon} alt="LinkedIn logo" className={styles['social-icon']} />
      </a>
      <a href="https://github.com/JLopezRuiz/website" target="_blank" rel="noopener noreferrer">
        <img src={GithubIcon} alt="Github logo" className={styles['social-icon']} />
      </a>
    </div>
  </div>
);

export default Footer;
