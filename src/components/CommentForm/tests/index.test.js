import React from "react";
import { render } from "@testing-library/react";
import CommentFormComponent from "../index";
import {test} from "@jest/globals";
import { fakeUser } from "../../../utils/testHelpers/fixtures/user";

const mockedAddComment = jest.fn()

test('renders', () => {
    const { debug } = render(<CommentFormComponent user={fakeUser} addComment={mockedAddComment} recipeId={''}/>)
    debug()
})