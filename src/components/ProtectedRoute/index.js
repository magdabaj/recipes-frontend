import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, user, ...rest }) =>
    <Route {...rest} render={
        props => {
            if (user.loggedIn) {
                return <Component {...rest} {...props} />
            } else {
                return <Redirect to={
                    {
                        pathname: '/login',
                        state: {
                            from: props.location
                        }
                    }
                } />
            }
        }
    } />

ProtectedRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    user: PropTypes.object.isRequired,
    location: PropTypes.string
}

export default ProtectedRoute;