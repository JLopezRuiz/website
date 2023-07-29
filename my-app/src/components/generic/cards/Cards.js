import React from 'react';
import CardItem from './CardItem';
import PlaceholderImage from '../../../assets/images/img-2.jpg';
import styles from './Cards.module.scss';

const Cards = () => (
  <div className={styles.cards}>
    <div className={styles.cards__container}>
      <div className={styles.cards__wrapper}>
        <ul className={styles.cards__items}>
          <CardItem imageSrc={PlaceholderImage} label="label" caption="Journal Title" path="/posts" />
        </ul>
      </div>
    </div>
  </div>
);

export default Cards;
