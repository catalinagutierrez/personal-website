import React from 'react';
import './footer.styles.scss';
// import Typewriter from 'typewriter-effect';

const Footer = () => (
    <div className='footer'>
        <hr/>
        <div className='footer-content'>
            <h3>
                {/* <Typewriter 
                    options={{
                        autoStart: false,
                        delay: 40
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString("Contact me any time, I'm happy to connect.")
                        .start();
                    }}
                /> */}
                contact me any time, i'm happy to connect.
                <br />
            </h3>
            cgutierrezm95@gmail.com
            <br />
            +1 (786) 674-4269
        </div>
    </div>
);

export default Footer;
