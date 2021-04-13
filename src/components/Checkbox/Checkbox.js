import React, { Component } from 'react';
import Item from '../UI/Item';

class Checkbox extends Component {
    render() {
        let checkboxes = <div>CheckBoxes</div>;
        checkboxes = this.props.checkBoxes.map((item, index) => {
            // console.log(item)
            return <Item key={index} {...item} onCheckChange={(e) => this.props.onCheckboxClick(e, index)} />
        });
        return checkboxes;
    }
}

export default Checkbox;