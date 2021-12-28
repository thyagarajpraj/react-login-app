import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className='card' style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
};

export default Card;