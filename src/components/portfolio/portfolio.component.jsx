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
                    img: require('../../assets/thesisThumbnail.jpg'),
                    alt: 'PCB Thumbnail'
                },
                {
                    id: '2',
                    name: 'Electronic Tourniquet',
                    img: require('../../assets/tourniquetDiagram.jpg'),
                    alt: 'Diagram Thumbnail'
                },
                {
                    id: '3',
                    name: 'Personal Website',
                    img: require('../../assets/websiteThumbnail.jpg'),
                    alt: 'Website Thumbnail'
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