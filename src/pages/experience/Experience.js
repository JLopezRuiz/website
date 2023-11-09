import React from 'react'
import styles from './Experience.module.scss';
import Title from '../../components/generic/title/Title';
import Resume from '../../components/resume/Resume';

const Experience = () => {
  return (
    <div id="experienceSection" className={styles['experience-section']}>
      <Title text={"Experience"} className={styles['experience-section-label']} />
      <Resume />
    </div>
  )
}

export default Experience