import React from 'react';
import { Component } from 'react';
import Checkbox from "../Checkbox/Checkbox";

class CheckboxParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numCheckbox: 5,
            checkBoxParent: true,
            checkbox: [
                { checked: true, value: 'Document 1' },
                { checked: true, value: 'Document 2' },
                { checked: true, value: 'Document 3' },
                { checked: true, value: 'Document 4' },
                { checked: true, value: 'Document 5' },
            ]
        }
    }

    onParentCheckbox = (e) => {
        let checkBoxes = [...this.state.checkbox];
        let newCheckBoxes = checkBoxes.map(key => {
            key.checked = e.target.checked;
            return key;
        });
        this.setState(prevState => {
            let newState = Object.assign({}, prevState);
            newState.checked = newCheckBoxes;
            newState.checkBoxParent = e.target.checked;
            return newState;
        })
    };

    onCheckboxClick = (e, index) => {
        let checkBox = [...this.state.checkbox];
        checkBox[index].checked = e.target.checked;
        let parentChecked = checkBox.every(el => {
            return el.checked;
        });
        this.setState(prevstate => {
            let newState = Object.assign({}, prevstate);
            newState.checkbox = checkBox;
            newState.checkBoxParent = parentChecked;
            return newState;
        });
    }

    render() {
        return <div style={{
            margin: 'auto',
            width: '400px',
            border: '1px solid #ccc',
            boxShadow: '1px solid #f00',
            alignItems: 'center',
            display: 'flex',
            flexFlow: 'column'
        }}>
            <div style={{ border: '1px solid red', width: '200px', alignItems: 'center', padding: '25px' }}>
                Parent Checkbox: <input type="checkbox" checked={this.state.checkBoxParent} onChange={(e) => this.onParentCheckbox(e)} />
            </div>
            <Checkbox numCheckbox={this.state.numCheckbox} checkBoxes={this.state.checkbox} onCheckboxClick={(e, index) => this.onCheckboxClick(e, index)} />
        </div>
    }
}

export default CheckboxParent;