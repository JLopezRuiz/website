import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({
  children,
  link,
  onClick,
  className
}) => {
  return (
    <Link to={link} className={className}>
      <button
        className={styles['btn--medium']}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    </Link>
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
