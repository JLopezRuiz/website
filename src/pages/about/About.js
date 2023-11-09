import React from 'react';
import Title from '../../components/generic/title/Title';
import Content from '../../components/generic/content/Content';
import styles from './About.module.scss';

const About = () => {
  const p1 = <p>Greetings! I'm Jackeline, a young developer residing in the alluring realm of Los Angeles, CA. My journey into the world of technology began during my college years, where my very first computer science class inspired me to become a <b>digital wizard</b>, capable of conjuring <b>captivating experiences.</b></p>;
  const p2 = <p>To me, the true magic lies in unraveling the mysteries behind every tool I craft. It's in these "behind-the-scenes" moments that the real enchantment occurs. I'm continually learning, embracing failures, growing, and, most importantly, <b>creating more magic.</b> My passion for technology, love for learning, and appreciation for life's simple pleasures come together to define my unique journey.</p>
  const p3 = <p>When I venture away from the digital realm, you'll likely find me exploring the pages of yet another library book, delving into the wisdom shared by podcasts during leisurely walks, or basking in the delightful company of my beloved dogs. And, of course, I find pure joy in sipping on a cafecito while surrounded by the warmth of my family.</p>;
  const p4 = <b>Let's connect and explore the magic of creation together! 🌟</b>;

  return (
    <section >
      <Title text="About"/>
      <Content paragraphs={[p1, p2, p3, p4]} />
      <div className={styles['contact-section']}>
        <a className={styles['email-link']} href="mailto:lopez.jackie425@gmail.com" aria-label='send email'>
            Conjure an email
        </a>
      </div>
    </section>
  );
};

export default About;
