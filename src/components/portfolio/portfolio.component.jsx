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
                    name: 'BLE ECG Device',
                    thumbnail: require('../../assets/thesisThumbnail.jpg'),
                    alt: 'PCB Thumbnail',
                    languages: 'C',
                    tools: 'PIC16F877A, PicKit3, MPX5050',
                    software: 'PIC C Compiler (CCS C)',
                    repo: 'https://github.com/catalinagutierrez/Digital-Tourniquet',
                    img: require('../../assets/thesisPCB.jpg'),
                    description: 'This project came to life as a class project for my Digital Electronics course. It was a quick prototype to test the potential implementation of this technology at a local hospital. It involved a breadboard with the components soldered, an air cuff with a pressure sensor, and an on/off control algorythm to maintin the target pressure for an amount of time programmed by the user.<br><br>A more detailed design can be seem in the diagram:<br><br>'

                },
                {
                    id: '2',
                    name: 'Electronic Tourniquet',
                    thumbnail: require('../../assets/tourniquetDiagram.jpg'),
                    alt: 'Diagram Thumbnail',
                    languages: 'C',
                    tools: 'PIC16F877A, PicKit3, MPX5050',
                    software: 'PIC C Compiler (CCS C)',
                    repo: 'https://github.com/catalinagutierrez/Digital-Tourniquet',
                    img: require('../../assets/tourniquetDiagram.jpg'),
                    description: 'This project came to life as a class project for my Digital Electronics course. It was a quick prototype to test the potential implementation of this technology at a local hospital. It involved a breadboard with the components soldered, an air cuff with a pressure sensor, and an on/off control algorythm to maintin the target pressure for an amount of time programmed by the user. A more detailed design can be seem in the diagram:'
                },
                {
                    id: '3',
                    name: 'Personal Website',
                    thumbnail: require('../../assets/websiteThumbnail.jpg'),
                    alt: 'Website Thumbnail',
                    languages: 'C',
                    tools: 'PIC16F877A, PicKit3, MPX5050',
                    software: 'PIC C Compiler (CCS C)',
                    repo: 'https://github.com/catalinagutierrez/Digital-Tourniquet',
                    img: '',
                    description: 'This project came to life as a class project for my Digital Electronics course. It was a quick prototype to test the potential implementation of this technology at a local hospital. It involved a breadboard with the components soldered, an air cuff with a pressure sensor, and an on/off control algorythm to maintin the target pressure for an amount of time programmed by the user.<br><br>A more detailed design can be seem in the diagram:<br><br>'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h3>My Portfolio </h3>
                <div className="portfolio">
                {
                    this.state.portfolio.map(({ id, ...otherItemProps}) => (<PortfolioEntry key={id} {...otherItemProps}/>))
                }
                </div>
            </div>
        );
    }
}

export default Portfolio;