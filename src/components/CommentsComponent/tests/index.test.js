import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from "@testing-library/react";
import * as jestDOM from '@testing-library/jest-dom';
import CommentsComponent from "../index";
import {fakeUser, loggedOutUser} from "../../../utils/testHelpers/fixtures/user";
import {fakeComments} from "../../../utils/testHelpers/fixtures/coments";

expect.extend(jestDOM)
const mockedAddComment = jest.fn()
const removeCommentMocked = jest.fn()
const getCommentsMocked = jest.fn()

test('renders CommentsComponent', () => {
    const { getByRole } = render(<CommentsComponent
        user={fakeUser}
        addComment={mockedAddComment}
        recipeId={'1'}
        removeComment={removeCommentMocked}
        getComments={getCommentsMocked}
        comments={fakeComments}
    />)
    const commentForm = getByRole('textarea')
    expect(commentForm).toBeInTheDocument()
})

test('renders CommentsComponent without comment form', () => {
    const { getByRole, queryByRole } = render(<Router>
            <CommentsComponent
            user={loggedOutUser}
            addComment={mockedAddComment}
            recipeId={'1'}
            removeComment={removeCommentMocked}
            getComments={getCommentsMocked}
            comments={fakeComments}
        />
    </Router>)
    const heading = getByRole('heading')

    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toBe('Musisz sie zalogowac zeby dodac komentarz')
    expect(queryByRole('textarea')).not.toBeInTheDocument()
})