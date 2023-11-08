import React from 'react';
import ResumeTab from './ResumeTab';
import RESUME_DATA from '../../data/ResumeData';

const Resume = () => {
    return (
    <div>
        {RESUME_DATA.map( job => <ResumeTab key={job.id} {...job} />)}
    </div>
    )
}

export default Resume;