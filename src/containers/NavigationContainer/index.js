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
import Navigation from '../../components/Navigation.js'
import {makeSelectUser} from "../LoginContainer/selectors";
import {signOut} from "../LoginContainer/actions";

export function NavigationContainer({ ...props }) {
    return <Navigation {...props} />;
}

NavigationContainer.propTypes = {
    user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
    user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(signOut()),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(withConnect)(NavigationContainer);
