import React from 'react';
import PropTypes from 'prop-types';
import styles from './Content.module.scss';

const Content = ({ contentClassName, paragraphs, paragraphClassName }) => (
  <div className={contentClassName || styles['text-default']}>
    {paragraphs.map((text) => (<p key={text.substring(1, 6)} className={paragraphClassName || styles['paragraph-spacing']}>{text}</p>))}
  </div>
);

Content.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  paragraphClassName: PropTypes.string,
  contentClassName: PropTypes.string,
};

Content.defaultProps = {
  paragraphs: null,
  paragraphClassName: null,
  contentClassName: null,
};

export default Content;
