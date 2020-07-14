import React from "react";
import AllRecipesComponent from "../index";
import {renderWithRouter} from "../../../utils/testHelpers";
import commonTests from "../../../utils/testHelpers/commonTests";
import {fakeRecipes} from "../../../utils/testHelpers/fixtures/recipes";

const renderRecipesComponent = () =>
    renderWithRouter(<AllRecipesComponent/>)

commonTests(renderRecipesComponent())

test('renders Spinner when there are no recipes', () => {
    const { getAllByDisplayValue, getByTestId } = renderWithRouter(
        <AllRecipesComponent
            route={'/'}
        />)
    // eslint-disable-next-line no-console
    expect(getAllByDisplayValue('We\'re waiting for server response')).toBeInTheDocument()
    expect(getByTestId('spinner')).toBeInTheDocument()
})

test('renders recipes', () => {
    const { queryAllByDisplayValue, queryByTestId } = renderWithRouter(
        <AllRecipesComponent
            recipes={fakeRecipes}
            route={'/'}
        />)
    // eslint-disable-next-line no-console
    expect(queryAllByDisplayValue('We\'re waiting for server response')).not.toBeInTheDocument()
    expect(queryByTestId('spinner')).not.toBeInTheDocument()
})