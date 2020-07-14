import React from "react";
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import RecipeContainer from "../RecipeContainer";

test('RecipeContainer', () => {
    const tree = renderer.create(<RecipeContainer/>).toJSON()
    expect(tree).toMatchSnapshot()
})
//
// test('RecipeContainer', () => {
//     const tree = render(<RecipeContainer/>)
//     // expect(tree).toMatchSnapshot()
//     console.log(tree)
//     // expect(tree.find('RecipeContainer')).toHaveStyleRule('display', 'flex')
// })