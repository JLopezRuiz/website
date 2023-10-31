import React from 'react';
import Title from '../../generic/title/Title';
import Content from '../../generic/content/Content';

const About = () => {
  const p1 = "Hi there, I'm Jackeline! I am currently a young developer in Los Angeles, CA. I graduated from Wellesley College in 2021 with a B.A. in Computer Science. I worked for two years as a Full-stack Engineer, but since then have quit to take a minor break to travel and explore new passions. I still love and enjoy coding, so during my time off, I have built this project!"; 
  const p2 = "I've been told that data is the most valuable commodity in today's modern world. I (like many others) subscribe to a multitude of online services where I have paid for the convenience and ease of online shopping, gaming, streaming, and more with my privacy. I (like many others again) have also never actually read all of the terms and conditions attached to those services. I simply check the checkbox and continue on with my merry way.";
  const p3 = "Therefore, in an effort to take back some of my power, I requested access to some of my data that the WWW has collected from me. In this site, I share what I have learned about myself based on the data that services like Spotify, YouTube, Nintendo and others collected about me - a young, Latina, female consumer who plays too much Animal Crossing and downloads more podcasts than she could ever listen to.";

  return (
    <section>
      <Title text="About" />
      <Content paragraphs={[p1, p2, p3]} />
    </section>
  );
};

export default About;
