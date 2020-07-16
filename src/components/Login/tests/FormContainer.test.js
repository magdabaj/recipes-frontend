import FormContainer from "../FormContainer";
import renderer from 'react-test-renderer'
import React from "react";

test('FormContainer', () => {
    const tree = renderer.create(<FormContainer/>).toJSON()
    expect(tree).toMatchSnapshot()
})