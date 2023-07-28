import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.scss';

const Title = ({ className, text }) => (
  <h1 className={className || styles['title-default']}>{text}</h1>
);

Title.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

Title.defaultProps = {
  className: '',
  text: 'Hello!',
};

export default Title;
