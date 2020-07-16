import {renderWithRouter} from "../../../utils/testHelpers";
import RecipesForm from "../index";
import {fireEvent, screen, waitFor} from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import {fakeRecipes} from "../../../utils/testHelpers/fixtures/recipes";
import {addRecipe as addRecipeMocked} from "../../../containers/RecipesFormContainer/actions";
import {fakeTags} from "../../../utils/testHelpers/fixtures/tags";
import React from "react";
import commonTests from "../../../utils/testHelpers/commonTests";
import {axe} from "jest-axe";
import {fakeUser} from "../../../utils/testHelpers/fixtures/user";

jest.mock("../../../containers/RecipesFormContainer/actions")

const renderRecipesForm = () =>
    renderWithRouter(
        <RecipesForm
            recipes={fakeRecipes}
            addRecipe={addRecipeMocked}
            tags={fakeTags}
            userId={fakeUser.id}
        />)

commonTests(renderRecipesForm)

test('renders form without violations', async() => {
    const {container} = renderRecipesForm()
    const results = await axe(container)
    expect(results).toHaveNoViolations()
})

test('fires addRecipes actions when form is correct', async () => {
    renderRecipesForm()
    const titleInput = screen.getByLabelText(/Tytuł/i)
    const websiteInput = screen.getByLabelText(/Strona/i)
    const urlInput = screen.getByLabelText("Url")
    const imageInput = screen.getByLabelText(/Url zdjęcia/i)
    const tagCheckbox = screen.getByTestId('alkohol')

    const saveButton = screen.getByText(/zapisz przepis/i)

    await userEvent.type(titleInput, 'test')
    await userEvent.type(websiteInput, 'test')
    await userEvent.type(urlInput, 'test')
    await userEvent.type(imageInput, 'test')
    // expect(checkbox).not.toBeInTheDocument()

    userEvent.click(tagCheckbox)

    const checkbox = screen.getByText(/rum/i)
    expect(checkbox).toBeInTheDocument()
    fireEvent.click(checkbox, { target: { checked: true } });
    await waitFor(() => userEvent.click(saveButton))

    expect(addRecipeMocked).toHaveBeenCalled()
    expect(addRecipeMocked).toHaveBeenCalledTimes(1)
})

test('shows error message if tag is not chosen',   () => {
    renderRecipesForm()
    const titleInput = screen.getByLabelText(/Tytuł/i)
    const websiteInput = screen.getByLabelText(/Strona/i)
    const urlInput = screen.getByLabelText("Url")
    const imageInput = screen.getByLabelText(/Url zdjęcia/i)
    const tagCheckbox = screen.getByTestId('warzywa, grzyby')

    // expect(errorMessage).not.toBeInTheDocument()

    const saveButton = screen.getByText(/zapisz przepis/i)

    userEvent.type(titleInput, 'test')
    userEvent.type(websiteInput, 'test')
    userEvent.type(urlInput, 'test')
    userEvent.type(imageInput, 'test')
    userEvent.click(tagCheckbox)
    userEvent.click(saveButton)
    const errorMessage = screen.getByText(/kategoria jest wymagana/i)
    expect(errorMessage).toBeInTheDocument()
})

test('calls setCancel function on click', async () => {
    const { history } = renderRecipesForm()

    const cancelButton = screen.getByText(/cofnij/i)
    userEvent.click(cancelButton)

    await waitFor(() => {
        expect(history.location.pathname).toEqual('/user-recipes')
    })

})

test('doesn\'t call the addRecipe function when inputs are empty', () => {
    renderRecipesForm()

    const saveButton = screen.getByText(/zapisz przepis/i)

    userEvent.click(saveButton)

    expect(addRecipeMocked).not.toHaveBeenCalled()
})

test('Displays different texts when editing recipe', () => {
    renderWithRouter(
        <RecipesForm
            recipes={fakeRecipes}
            addRecipe={addRecipeMocked}
            tags={fakeTags}
            userId={fakeUser.id}
            recipeId={'1'}
        />
    )

    const editButton = screen.queryByText(/edytuj przepis/i)
    expect(editButton).toBeInTheDocument()
})