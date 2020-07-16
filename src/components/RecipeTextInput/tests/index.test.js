import RecipeTextInput from "../index";
import {render, screen} from "@testing-library/react";
import React from "react";
import commonTests from "../../../utils/testHelpers/commonTests";

const renderRecipeTextInput = (error = '') =>
    render(
        <RecipeTextInput
            type={'test'}
            value={'test'}
            name={'test'}
            onChange={jest.fn()}
            placeholder={'test'}
            label={'test'}
            error={error}
        />)

commonTests(renderRecipeTextInput)

test('shows no errors when they are not specified', () => {
        renderRecipeTextInput()
        const errorMessage = screen.queryByTestId('error-message')
        expect(errorMessage).not.toBeInTheDocument()
})

test('shows error when specified', () => {
        const {rerender} = renderRecipeTextInput()

        rerender(<RecipeTextInput
            type={'test'}
            value={'test'}
            name={'test'}
            onChange={jest.fn()}
            placeholder={'test'}
            label={'test'}
            error={'error'}
        />)

        const errorMessage = screen.getByTestId('error-message')
        const input = screen.getByLabelText(/test/i)
        expect(errorMessage).toBeInTheDocument()
        expect(errorMessage).toHaveTextContent('error')
        expect(input).toHaveClass('input input-error')
})

