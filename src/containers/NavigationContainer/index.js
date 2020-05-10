/**
 *
 * NavigationContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import { makeSelectUser } from '../LoginFormContainer/selectors';
import Navigation from '../../components/Navigation.js'
import './index.css';
import {makeSelectUser} from "../LoginContainer/selectors";
// import { signOut } from '../LoginFormContainer/actions';

export function NavigationContainer({ ...props }) {
    return <Navigation {...props} />;
}

NavigationContainer.propTypes = {
    user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
    // navigationContainer: makeSelectNavigationContainer(),
    user: makeSelectUser(),
    // isOpen: makeSelectIsOpen(),
});

function mapDispatchToProps(dispatch) {
    return {
        // toggleNavigation: () => dispatch(toggleNavigation()),
        // signOut: () => dispatch(signOut()),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(withConnect)(NavigationContainer);
