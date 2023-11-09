import React from 'react';
import PropTypes from 'prop-types';
import styles from './Content.module.scss';

const Content = ({ contentClassName, paragraphs, paragraphClassName }) => (
  <section className={contentClassName || styles['text-default']}>
    {paragraphs.map((text) => (<div key={Math.random()} className={paragraphClassName || styles['paragraph-spacing']}>{text}</div>))}
  </section>
);

Content.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.object),
  paragraphClassName: PropTypes.string,
  contentClassName: PropTypes.string,
};

Content.defaultProps = {
  paragraphs: null,
  paragraphClassName: null,
  contentClassName: null,
};

export default Content;
