import React from 'react';
import './experience-entry.styles.scss';


const ExperienceEntry = ({ id, company, position, time, description, languages, framework }) => (
    <div className='experience-entry'>
        <h4>{company}</h4>
        {position}<br/>
        {time}<br/><br/>
        {description}<br/><br/>
        <b>Languages:</b> {languages}<br/>
        <b>Frameworks:</b> {framework}
    </div>
);

export default ExperienceEntry;