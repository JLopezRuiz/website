import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({
  children,
  link,
  onClick,
  className
}) => {
  return (
    <HashLink smooth to={link} className={className}>
      <button
        className={styles['btn--medium']}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    </HashLink>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: '',
  link: '/',
  onClick: () => {},
};

export default Button;
