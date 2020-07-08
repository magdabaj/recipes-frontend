import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CommentFormComponent from "../index";
import {test} from "@jest/globals";
import { fakeUser } from "../../../utils/testHelpers/fixtures/user";
import * as jestDOM from '@testing-library/jest-dom';
import fetchStates from "../../../utils/fetchStates";

expect.extend(jestDOM)

const mockedAddComment = jest.fn()

test('renders CommentForm', () => {
    const { getByRole } = render(<CommentFormComponent user={fakeUser} addComment={mockedAddComment} recipeId={'1'}/>)
    const addButton = getByRole('button')

    fireEvent.click(addButton)
    expect(addButton.textContent).toBe('Dodaj komentarz')
})

test('shows loading message', () => {
    const { getByRole } = render(<CommentFormComponent user={fakeUser} addComment={mockedAddComment} recipeId={'1'} addCommentStatus={fetchStates.fetching}/>)
    const addButton = getByRole('button')

    fireEvent.click(addButton)
    expect(addButton.textContent).toBe('Dodawanie...')
})