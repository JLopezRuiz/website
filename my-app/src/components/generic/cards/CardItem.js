import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CardItem.module.scss';

const CardItem = ({
  imageSrc, caption, path, label,
}) => (
  <div>
    <li className={styles.cards__item}>
      <Link className={styles.cards__item__link} to={path}>
        <figure className={styles['cards__item__pic-wrap']} data-category={label}>
          <img
            className={styles.cards__item__img}
            alt=""
            src={imageSrc}
          />
        </figure>
        <div className={styles.cards__item__info}>
          <h5 className={styles.cards__item__text}>{caption}</h5>
        </div>
      </Link>
    </li>
  </div>
);

CardItem.propTypes = {
  imageSrc: PropTypes.string,
  caption: PropTypes.string,
  path: PropTypes.string,
  label: PropTypes.string,
};

CardItem.defaultProps = {
  imageSrc: '',
  caption: '',
  path: '/',
  label: '',
};

export default CardItem;
