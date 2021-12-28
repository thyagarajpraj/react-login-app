import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';

class Notes extends Component {
    render() {
        return (
            <>
                <Header />
                <Content />
            </>
        );
    }
}

export default Notes;