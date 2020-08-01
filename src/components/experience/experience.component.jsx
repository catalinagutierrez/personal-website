import React from 'react';
import './experience.styles.scss';

const Experience = () => (
    <div>
        <h3>My Journey So Far</h3>
        <div className='experience-body'>
            <article className='experience-entry'>
                <div className='experience-label'>
                    <h2>
                        Northeastern University <span>Januray 2021 - ?</span>
                    </h2>
                    <p>
                        I will start a masters degree in computer science in
                        Boston in spring 2021.
                    </p>
                </div>
            </article>
            <article className='experience-entry'>
                <div className='experience-label'>
                    <h2>
                        Escafandra <span>July 2019 - Present</span>
                    </h2>
                    <p>
                        I currently work remotely part-time as a full stack
                        developer as part of a small team. We offer a web based
                        application that health providers utilize to organize
                        patient records, medical histories, and financial
                        information.
                        <br />
                        <br />
                        Languages: C#, JavaScript, HTML CSS, SQL Server
                        <br />
                        Framework: ASP.NET MVC
                    </p>
                </div>
            </article>
            <article className='experience-entry'>
                <div className='experience-label'>
                    <h2>
                        Northwestern University{' '}
                        <span>January 2019 - June 2019</span>
                    </h2>
                    <p>
                        I worked as research assistant at Miller Laboratory of
                        Limb Motor Control, contributing to research by setting
                        up a motion tracking system using multiple cameras for
                        3D reconstruction of hand kinematics.
                        <br />
                        <br />
                        Languages: Python
                    </p>
                </div>
            </article>
            <article className='experience-entry'>
                <div className='experience-label'>
                    <h2>
                        EIA University <span>July 2014 - December 2019</span>
                    </h2>
                    <p>
                        Graduated from my bachelors in biomedical enigneering.
                    </p>
                </div>
            </article>
        </div>
    </div>
);

export default Experience;
