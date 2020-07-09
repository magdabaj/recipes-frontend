import React from 'react';
import {fireEvent, render} from "@testing-library/react";
import Navigation from "../index";
import {fakeUser, loggedOutUser} from "../../../utils/testHelpers/fixtures/user";
import {createHistory} from "../../../utils/testHelpers/fp";
import {Router} from "react-router";

const signOutMocked = jest.fn()
const history = createHistory('/')
describe('<Navigation/>', () => {
    const renderNavigation = ({
                                  signOut = signOutMocked,
                                  user = fakeUser,
    } = {}) =>
        render(
            <Router history={history}>
                <Navigation
                    signOut={signOut}
                    user={user}
                />
            </Router>
)

    it('should not log errors in console', function () {
        const spy = jest.spyOn(global.console, 'error')
        renderNavigation()
        expect(spy).not.toHaveBeenCalled()
    });

    it('should render and match the snapshot', function () {
        const {
            container: { firstChild }
        } = renderNavigation()
        expect(firstChild).toMatchSnapshot()
    });

    it('should logout user', () => {
        const { getByTestId, queryByRole } = renderNavigation()

        const logoutButton = getByTestId('logout')
        const yourProfile = queryByRole('your-profile')

        expect(yourProfile).toBeInTheDocument()

        fireEvent.click(logoutButton)
        expect(signOutMocked).toHaveBeenCalled()
    })

    it('redirects if loggedIn is true', () => {
        const { queryByRole } = renderNavigation({
            user: loggedOutUser,
        })

        const yourProfile = queryByRole('your-profile')
        expect(yourProfile).not.toBeInTheDocument()
    })
})