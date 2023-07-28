import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardItem = ({
  src, text, path, label,
}) => (
  <div>
    <li className="cards__item">
      <Link className="cards__item__link" to={path}>
        <figure className="cards__item__pic-wrap" data-category={label}>
          <img
            className="cards__item__img"
            alt="Travel"
            src={src}
          />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{text}</h5>
        </div>
      </Link>
    </li>
  </div>
);

CardItem.propTypes = {
  src: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  label: PropTypes.string,
};

CardItem.defaultProps = {
  src: '',
  text: '',
  path: '',
  label: '',
};

export default CardItem;
