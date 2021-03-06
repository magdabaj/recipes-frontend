/**
 *
 * LoginFormContainer
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import makeSelectLoginFormContainer, { makeSelectError, makeSelectStatus, makeSelectUser } from './selectors'
import { signUp, signIn, authenticate } from './actions'
import Login from '../../components/Login';
import {Redirect} from "react-router";

export function LoginContainer({ ...props }) {
    useEffect(() => {
        if (props.user.loggedIn === false) {
            props.authenticate();
        }
    }, []);

    return props.user.loggedIn ? <Redirect to={'/user-recipes'}/> : <Login {...props} />;
}

LoginContainer.propTypes = {
    user: PropTypes.object,
    signUp: PropTypes.func,
    signIn: PropTypes.func,
    authenticate: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    loginFormContainer: makeSelectLoginFormContainer(),
    user: makeSelectUser(),
    error: makeSelectError(),
    status: makeSelectStatus(),
});

function mapDispatchToProps(dispatch) {
    return {
        signUp: ({ email, password }) => dispatch(signUp({ email, password })),
        signIn: ({ email, password }) => dispatch(signIn({ email, password })),
        authenticate: () => dispatch(authenticate()),
        // setError: () => setError(),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(withConnect)(LoginContainer);
