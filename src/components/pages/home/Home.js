import React from 'react';
import Cards from '../../generic/cards/Cards';
import styles from './Home.module.scss';
import Title from '../../generic/title/Title';

const Home = () => {
  const p1 = 'What data do online services like DoorDash, Netflix, Tik Tok, YouTube, or Amazon collect from their consumers?';
  return (
    <div>
      <Title text={p1} />
      <p className={styles.text}>
        Thanks to data privacy laws we have rights to access the data that these online services
        collect from us.
        Explore posts where I explore the data that these online services collected from me.
        I hope this project can inspire you to think more about one of your most valuable assets:
        {' '}
        <b>your data.</b>
      </p>
      <Cards />
    </div>
  );
};

export default Home;
