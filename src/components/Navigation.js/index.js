/**
 *
 * Navigation
 *
 */

import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import '../../containers/NavigationContainer/index.css'
// import styled from 'styled-components';

function Navigation({ user, signOut }) {
    return (
        <div className={'navigation-container'}>
            <div className={'navigation'}>
                {/*<div style={{width: "15px"}}/>*/}

                <div className={'navigation-title'}>
                    <NavLink to={'/'} exact className={'navigation-title--item'}>
                        Recipes
                    </NavLink>
                </div>

                <div className={'navigation-links'}>
                    <NavLink to={'/'} exact className={'navigation-links--item'}>
                        Recipes
                    </NavLink>
                    <NavLink to={'/'} className={'navigation-links--item'}>
                        Home
                    </NavLink>
                    <NavLink to={'/user-recipes'} className={'navigation-links--item'}>
                        Your Profile
                    </NavLink>
                </div>

                <div className={'navigation-login'}>
                    {/*{user.loggedIn ? (*/}
                    {/*    <div className={'navigation-login--item'}>*/}
                    {/*        <div>{user.email}</div>*/}
                    {/*        <div onClick={signOut}>Log Out</div>*/}
                    {/*    </div>*/}
                    {/*) : (*/}
                    {/*    <NavLink to={'/login'} className={'navigation-login--item'}>*/}
                    {/*        Log In*/}
                    {/*    </NavLink>*/}
                    {/*)}*/}
                </div>
            </div>
        </div>
    );
}

Navigation.propTypes = {};

export default memo(Navigation);
