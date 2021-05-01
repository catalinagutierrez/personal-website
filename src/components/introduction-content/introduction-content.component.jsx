import React from 'react';
import './introduction-content.styles.scss';
import Typewriter from 'typewriter-effect';

const IntroductionContent = () => (
    <div className='introduction-content'>
        <h1>
            <Typewriter 
                options={{
                    autoStart: false,
                    delay: 40
                }}
                onInit={(typewriter) => {
                    typewriter.pauseFor(400)
                    .typeString("<span style='font-size:80px'>Hi.</span>")
                    .pauseFor(300)
                    .typeString("<span style='font-size:80px'> I'm Catalina.</span>")
                    .pauseFor(1200)
                    .changeDelay(30)
                    .typeString("<br>A biomedical engineer who fell in love with software development.")
                    .start();
                }}
            />
        </h1>
    </div>
);

export default IntroductionContent;
