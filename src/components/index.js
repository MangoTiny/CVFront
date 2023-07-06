import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import './Content.css'

export default function CV_Content () {
    return (
        <div className='cv-content'>
            <Sidebar />
            <Content />
        </div>
    )
}