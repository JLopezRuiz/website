import React from 'react';
import Title from '../../generic/title/Title';
import Content from '../../generic/content/Content';

const About = () => {
  const p1 = "I have read that data is the most valuable commodity in today's modern world. I - like many others - subscribe to a multitude of online services where I have paid for the convenience and ease of online shopping, gaming, streaming, and more with my privacy. I - like many others again - have never actually read all of the terms and conditions attached to those services. I simply check the checkbox and continue with my merry way. ";
  const p2 = "Therefore, in an effort to take back some of my power, I requested access to some of my data that the World Wide Web has collected from me. In this site, I share what I have learned about myself based on the data that services like Spotify, YouTube, Nintendo and others collected about me - a young, Latina, female consumer who plays too much Animal Crossing and finishes eating a meal before she's able to choose which show to stream.";

  return (
    <div>
      <Title text="About" />
      <Content paragraphs={[p1, p2]} />
    </div>
  );
};

export default About;
