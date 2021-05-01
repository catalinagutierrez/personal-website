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
                    typewriter.pauseFor(300)
                    .typeString("<span style='font-size:100px'>Hi, I'm Catalina.</span>")
                    .pauseFor(1500)
                    .typeString("<br>A biomedical engineer who fell in<br>love with software development.")
                    .start();
                }}
            />
        </h1>
    </div>
);

export default IntroductionContent;
