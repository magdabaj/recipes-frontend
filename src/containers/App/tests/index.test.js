import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'

import App from '../index';
import {describe, expect, it} from "@jest/globals";

const renderer = new ShallowRenderer();

describe('<App/>', () => {
    it('should render and match the snapshot', () => {
        renderer.render(<App/>);
        const renderedOutput = renderer.getRenderOutput();
        expect(renderedOutput).toMatchSnapshot();
    })
})