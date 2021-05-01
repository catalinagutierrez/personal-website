import React, { useState, useEffect } from 'react';
import './portfolio-entry.styles.scss';
import Modal from 'react-bootstrap/Modal';

const PortfolioEntry = (props) => {
    const [show, setShow] = useState(false);

    const handleModalShowHide = () => {
        setShow(!show)
    }

    return (
        <div
            className='portfolio-entry'
            data-aos='fade-up'
            data-aos-delay={props.animationDelay}
        >
            <div>
                <button onClick={() => handleModalShowHide()}>
                    <img src={props.thumbnail} alt={props.alt} />
                    {props.name}
                </button>
            </div>

            <Modal
                show={show}
                onHide={() => handleModalShowHide()}
            >
                <Modal.Header
                    closeButton
                    onClick={() => handleModalShowHide()}
                >
                    <Modal.Title>
                        <h2>{props.name}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>Languages and tools used:</b> {props.languages}
                    <br />
                    <br />
                    {props.description}
                    <br />
                    <br />
                    {props.imageCaption} 
                    {props.link ? <a href={props.link}>here.</a> : null}
                    <br />
                    <br />
                    <img src={props.img} alt='' />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default PortfolioEntry;
