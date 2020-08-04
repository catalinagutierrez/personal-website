import React from 'react';
import './introduction-section.styles.scss';
import IntroductionContent from '../introduction-content/introduction-content.component';

const IntroductionSection = () => (
    <div className='introduction-section' data-aos='fade-in'>
        <IntroductionContent />
    </div>
);

export default IntroductionSection;
