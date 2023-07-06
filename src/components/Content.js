import React from 'react';
import { data } from '../constants/constants';

export default function Content () {
    return (
        <div className='content'>
             <h2>Work History</h2>
             {data.work_history.map((job, index) => (
                 <div key={index}>
                 <h3>{job.date}</h3>
                 <p>{job.title} at {job.company}</p>
                 <p>{job.summary}</p>
                 <ul>
                     {job.bullet_points.map((bullet, index) => (
                     <li key={index}>{bullet}</li>
                     ))}
                 </ul>
                 </div>
             ))}
             <h2>Education</h2>
            {data.education.map((education, index) => (
                <div key={index}>
                <h3>{education.year}</h3>
                <p>{education.title}</p>
                <p>{education.summary}</p>
                </div>
            ))}
        </div>
    )
}