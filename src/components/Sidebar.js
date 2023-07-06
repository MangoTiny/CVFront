import React from 'react';
import { data } from '../constants/constants';
import { Alignments } from '@syncfusion/ej2-react-richtexteditor';

export default function Sidebar () {
    return (
        <div className='sidebar'>
            <img src={process.env.PUBLIC_URL + '/2.jpg'} style={{width: '300px', height: '300px', borderRadius: '50%', 
    padding :'10%', alignment:'center'}} Align='center'></img>
            <h1>{data.full_name}</h1>
            <p>{data.position}</p>
            <p>{data.summary}</p>
            <h2>Contact Information</h2>
            <p>Phone Number: {data.phone_number}</p>
            <p>Website: <a href={data.website}>{data.website}</a></p>
            <h2>Skills</h2>
            <ul>
                {data.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}