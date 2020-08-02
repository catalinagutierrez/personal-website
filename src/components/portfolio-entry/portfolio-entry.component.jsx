import React from 'react';
import './portfolio-entry.styles.scss';
import Modal from 'react-bootstrap/Modal';

class PortfolioEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showHide: false,
        };
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide });
    }

    render() {
        return (
            <div className='portfolio-entry'>
                <button onClick={() => this.handleModalShowHide()}>
                    <img src={this.props.thumbnail} alt={this.props.alt} />
                    {this.props.name}
                </button>

                <Modal
                    show={this.state.showHide}
                    onHide={() => this.handleModalShowHide()}
                >
                    <Modal.Header
                        closeButton
                        onClick={() => this.handleModalShowHide()}
                    >
                        <Modal.Title>
                            <h2>{this.props.name}</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <b>Languages used:</b> {this.props.languages}
                        <br />
                        <b>Tools used:</b> {this.props.tools}
                        <br />
                        <br />
                        {this.props.description}
                        <br />
                        <br />
                        {this.props.imageCaption}
                        <br />
                        <br />
                        <img src={this.props.img} alt='' />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default PortfolioEntry;
