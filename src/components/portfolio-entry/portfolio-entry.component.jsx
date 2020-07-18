import React from 'react';
import './portfolio-entry.styles.scss';


const PortfolioEntry = ({ id, name, img, alt }) => (
    <button className='portfolio-entry'>
        <img src={img} alt={alt}/>
        {name}
    </button>
);

export default PortfolioEntry;