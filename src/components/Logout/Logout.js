import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../../store/actions/index';

class Logout extends Component {
    render() {
        const authRedirect = <Redirect to="/login" />;
        this.props.onLogout();
        return (
            <div>
                {authRedirect}
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logOut())
    };
};

export default connect(null, mapDispatchToProps)(Logout);