import React from 'react';

const Item = (props) => {
    return <>
        {props.value}<input type="checkbox" checked={props.checked}  onChange={(e)=>props.onCheckChange(e)} value={props.value} />
        <br />
    </>
};

export default Item;