import React from 'react'
import styles from './Experience.module.scss';
import Title from '../../generic/title/Title';

// Taboola, Liberty Mutual, DeNovo
const Experience = () => {
  return (
    <div id="experienceSection" className={styles['experience-section']}>
      <Title text={"Experience"} className={styles['experience-section-label']} />
      <div>
        <h2>Testy test</h2>
      </div>
    </div>
  )
}

export default Experience