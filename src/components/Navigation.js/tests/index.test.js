import React from 'react';
import { render } from "@testing-library/react";
import { withStoreAndRouter } from "../../../utils/testHelpers";
import Navigation from "../index";
import {fakeUser} from "../../../utils/testHelpers/fixtures/user";

describe('<Navigation/>', () => {
    const renderNavigation = (signOut = jest.fn(), user = fakeUser) =>
        render(
            withStoreAndRouter(
                <Navigation signOut={signOut} user={user}/>
            )
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
})