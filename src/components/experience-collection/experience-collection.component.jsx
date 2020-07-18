import React from 'react';
import './experience-collection.styles.scss';

import ExperienceEntry from '../experience-entry/experience-entry.component';

class ExperienceCollection extends React.Component {
    constructor() {
        super();

        this.state = {
            experience: [
                {
                    id: '1',
                    company: 'Escafandra S.A.S.',
                    position: 'Full Stack Developer',
                    time: 'July 2019 - Present',
                    description: 'I currently work remotely part-time as a junior full stack developer as part of a small team. We offer a web based application that health providers utilize to organize patient records, medical histories, and financial information.',
                    languages: 'C#, JavaScript, HTML, CSS, SQL Server',
                    framework: 'Entity'
                },
                {
                    id: '2',
                    company: 'Northwestern Univeristy',
                    position: 'Research Intern',
                    time: 'January 2019 - June 2019',
                    description: 'I worked as research assistant at Miller Laboratory of Limb Motor Control, contributing to research by setting up a motion tracking system using multiple cameras for 3D reconstruction of hand kinematics.',
                    languages: 'Python',
                    framework: ''
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h3>The Road so Far </h3>
                <div className="experience-collection">
                {
                    this.state.experience.map(({ id, ...otherItemProps}) => (<ExperienceEntry key={id} {...otherItemProps}/>))
                }
                </div>
            </div>
        );
    }
}

export default ExperienceCollection;