import React from 'react';
import './portfolio.styles.scss';

import PortfolioEntry from '../portfolio-entry/portfolio-entry.component';

class Portfolio extends React.Component {
    constructor() {
        super();

        this.state = {
            portfolio: [
                {
                    id: '1',
                    name: 'Personal Website',
                    thumbnail: require('../../assets/websiteThumbnail.jpg'),
                    alt: 'Website Thumbnail',
                    languages: 'ReactJS, SASS',
                    tools: '',
                    software: 'Visual Studio Code',
                    img: '',
                    description:
                        "In my fascination for building useful tools, I decided to take the skills I've learned on my own to build my personal website—plus, I got the chance to tackle web development using React.",
                },
                {
                    id: '2',
                    name: 'BLE ECG Device',
                    thumbnail: require('../../assets/thesisThumbnail.jpg'),
                    alt: 'PCB Thumbnail',
                    languages: 'C, MATLAB',
                    Tools: 'Segger Embedded Studios, MATLAB, Altium',
                    img: require('../../assets/thesisDiagram.jpg'),
                    description:
                        "My bachelor's thesis project was the design and prototyping of a cardiac biopotential recording device that uses two synchronized, independent signal readings from the patients chest using Bluetooth Low Energy to transmit data wirelessly to a central processing unit.",
                    imageCaption:
                        'The overall functionality of the device is shown in the following diagram:',
                },
                {
                    id: '3',
                    name: 'Electronic Tourniquet',
                    thumbnail: require('../../assets/tourniquetDiagram.jpg'),
                    alt: 'Diagram Thumbnail',
                    languages: 'C',
                    tools: 'PIC C Compiler (CCS C)',
                    img: require('../../assets/tourniquetDiagram.jpg'),
                    description:
                        'This project came to life as a class project for my Digital Electronics course. It was a quick prototype to test the potential implementation of this technology at a local hospital. It involved a breadboard with the components soldered, an air cuff with a pressure sensor, and an on/off control algorythm to maintin the target pressure for an amount of time programmed by the user.',
                    imageCaption:
                        'A more detailed design can be seem in the diagram:',
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <h3>My Portfolio </h3>
                <div className='portfolio'>
                    {this.state.portfolio.map(({ id, ...otherItemProps }) => (
                        <PortfolioEntry key={id} {...otherItemProps} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Portfolio;
