import React, { useState } from 'react';

const Input = (props) => {
    const [value, setValue] = useState('');

    const onChangeHandler = (e) => {
        setValue(e.target.value);
        props.onValueChange(e.target.value);
    };

    return (
        <input type='text' value={value} onChange={(e) => onChangeHandler(e)} />
    )
};

export default Input;