import { isEqual } from 'lodash';
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Auxiliary from '../../hoc/Auxialiary';
import * as actions from '../../store/actions/index';
import Input from '../UI/Input';

class Categories extends Component {
    state = {
        inputText: '',
    };

    componentDidMount() {
        this.props.getCategories(this.state.inputText);
    }

    componentDidUpdate() {
        this.props.getCategories(this.state.inputText);
        console.log('did update');
    }

    shouldComponentUpdate(nextProps, nextState) {
        let same = isEqual(this.props.categories, nextProps.categories);
        return !same;
    }

    onValueChange = (e) => {
        // console.log(e)
        this.setState({ inputText: e });
        this.props.getCategories(e);
    };

    render() {
        let catSelect = null;
        console.log('render');

        if (this.props.categories) {
            let options = Object.keys(this.props.categories).map(cat => {
                return <option key={cat} value={cat}>{this.props.categories[cat].name}</option>;
            });

            catSelect = <select name='categories'>
                {options}
            </select>
        }

        return <Auxiliary>
            <div className="gridContainer">
                <h2 style={{ alignItems: 'center' }}>Use AG Grid to show data</h2>
                <br />
                <Input type='text' value={this.state.inputText} onValueChange={(e) => this.onValueChange(e)} />
                <br />
                {catSelect}
            </div>
        </Auxiliary>
    };
}

const mapStateToProps = state => {
    return {
        categories: state.oshop.categories,
        error: state.oshop.error,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getCategories: (val) => dispatch(actions.getCategories(val))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);