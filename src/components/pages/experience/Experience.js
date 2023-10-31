import React from 'react'
import styles from './Experience.module.scss';
import Title from '../../generic/title/Title';

// Taboola, Liberty Mutual, DeNovo
const Experience = () => {
  return (
    <div id="experienceSection" className={styles['experience-section']}>
      <Title text={"Experience"} className={styles['experience-section-label']} />
      <section>
        <h2>Testy test</h2>
      </section>
    </div>
  )
}

export default Experience