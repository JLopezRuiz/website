import React from 'react';
import Title from '../../generic/title/Title';
import Content from '../../generic/content/Content';
import styles from './Tutoring.module.scss';

const Posts = () => {
  const p1 = 'If you, your child, or anyone else you know is in need of extra support to learn computer science, then I offer tutoring both in person and virtual through Zoom.';
  const p2 = 'I graduated from Wellesley College with a B.A. in Computer Science in 2021. I was a TA for an introductory course to computer science while I was in college. I also have two years of experience working in the tech industry as a Software Engineer. Additionally, I wrote this entire website on my own! You can check out my code on Github and my LinkedIn down below as well.';
  const p3 = 'Please get in touch! I’m flexible and open to discussing smaller rates for low-income families. I aim to be as accessible as possible to help encourage tech!  Please fill out this Google Form with your information and I will reach out within 24 hours.';

  return (
    <div>
      <Title text="CS Tutoring" />
      <Content paragraphs={[p1, p2]} />
      <h2 className={styles['section-header']}>Rates</h2>
      <ul className={styles['rates-list']}>
        <li>1 session: $50</li>
        <li>1 session weekly for 3 weeks: $135</li>
        <li>Weekly sessions for 4+ weeks: $40 each session</li>
      </ul>
      <Content paragraphs={[p3]} />
    </div>
  );
};

export default Posts;
