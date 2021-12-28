import React, { Fragment } from 'react';
import { Component } from 'react';
// import ItemContainer from '../../containers/ItemContainer/ItemContainer';
import Notes from '../../containers/Notes/Notes';
import Categories from '../Categories/Categories';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <Categories />
                    {/* <ItemContainer /> */}
                    <Notes />
                </div>
            </Fragment>
        );
    }
}
export default Home;