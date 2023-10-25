import React from 'react';
import Cards from '../../generic/cards/Cards';
import Experience from '../experience/Experience';
import FrontPage from '../front-page/FrontPage';

const Home = () => {
  return (
    <div>
      <div id="frontPage">
       <FrontPage />
      </div>
      <Experience />
      <Cards />
    </div>
  );
};

export default Home;
