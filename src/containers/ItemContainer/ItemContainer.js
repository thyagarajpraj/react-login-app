import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import SimpleCard from '../../components/UI/SimpleCard/SimpleCard';

class ItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Box component="span" m={1} display="flex" flexWrap="wrap">
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
            </Box>
        );
    }
}

export default ItemContainer;