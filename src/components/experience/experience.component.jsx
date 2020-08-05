import React from 'react';
import './experience.styles.scss';

const Experience = () => (
    <div>
        <h3>My Journey So Far</h3>
        <div className='experience-body'>
            <div className='animation' data-aos='fade-left'>
                <article className='experience-entry'>
                    <div className='experience-label'>
                        <h2>
                            Northeastern University{' '}
                            <span>January 2021 - !</span>
                        </h2>
                        <p>
                            Moving to Boston to start a masters degree in
                            computer science in spring 2021.
                        </p>
                    </div>
                </article>
            </div>
            <div className='animation' data-aos='fade-left'>
                <article className='experience-entry'>
                    <div className='experience-label'>
                        <h2>
                            Escafandra <span>July 2019 - August 2020</span>
                        </h2>
                        <p>
                            Worked remotely as a full stack developer. The
                            company offers a web based application that health
                            providers utilize to organize patient records,
                            medical histories, and financial information using
                            the ASP.NET MVC 5 framework. I worked with
                            JavaScript, HTML and CSS in the frontend, and C# and
                            SQL Server in the backend.
                        </p>
                    </div>
                </article>
            </div>
            <div className='animation' data-aos='fade-left'>
                <article className='experience-entry'>
                    <div className='experience-label'>
                        <h2>
                            Northwestern University{' '}
                            <span>January 2019 - June 2019</span>
                        </h2>
                        <p>
                            Worked as research assistant at Miller Laboratory of
                            Limb Motor Control, contributing by setting up a
                            motion tracking system using multiple cameras for 3D
                            reconstruction of hand kinematics.
                        </p>
                    </div>
                </article>
            </div>
            <div className='animation' data-aos='fade-left'>
                <article className='experience-entry'>
                    <div className='experience-label'>
                        <h2>
                            EIA University{' '}
                            <span>July 2014 - December 2019</span>
                        </h2>
                        <p>
                            Obtained my bachelors degree in biomedical
                            engineering.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </div>
);

export default Experience;
