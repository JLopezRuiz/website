import React from 'react';
import CardItem from './CardItem';
import Headphones from '../../../assets/images/headphones.jpg';
import styles from './Cards.module.scss';

const Cards = () => (
  <div className={styles.cards}>
    <div className={styles.cards__container}>
      <div className={styles.cards__wrapper}>
        <ul className={styles.cards__items}>
          <CardItem imageSrc={Headphones} label="coming soon..." caption="What do my top 10 most listened to artists on Spotify say about me?" path="/website" />
        </ul>
      </div>
    </div>
  </div>
);

export default Cards;
