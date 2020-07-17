import React from 'react';

import App from '../index';
import { withStoreAndRouter} from "../../../utils/testHelpers";
import {describe, expect, it} from "@jest/globals";
import { render } from "@testing-library/react";


function renderApp(args) {
    const defaultProps = {
        authenticate: () => {},
        user: {},
    }
    const props = {
        ...defaultProps,
        ...args
    }

    return render(withStoreAndRouter(<App {...props} />))
}

describe('<App/>', () => {
    it('should not log errors in console', function () {
        const spy = jest.spyOn(global.console, 'error')
        renderApp()
        expect(spy).not.toHaveBeenCalled()
    });

    it('should render and match the snapshot', () => {
        const { container } = renderApp()
        expect(container.firstChild).toMatchSnapshot()
    })
})