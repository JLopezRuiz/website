import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  console.log({ checkButtonStyle, checkButtonSize });

  return (
    <Link to="/resume" className={styles['btn-mobile']}>
      <button
        className={styles[`btn ${checkButtonStyle} ${checkButtonSize}`]}
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
  onClick: PropTypes.func,
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
  buttonStyle: '',
  buttonSize: '',
};

export default Button;
