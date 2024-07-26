import React from 'react'
import styles from './ResumeTab.module.scss';

const ResumeTab = ({title, companyName, description, date }) => {
    return (
        <div className={styles['resume-tab']}>
            <div className={styles['resume-tab-date']}>{date}</div>
            <section className={styles['resume-tab-section']}>
                <h1>{title}</h1>
                <p className={styles['resume-tab-subtitle']}>{companyName}</p>
                <p>{description}</p>
            </section>
        </div>
    )
}

export default ResumeTab