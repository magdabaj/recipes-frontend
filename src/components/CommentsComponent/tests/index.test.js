import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from "@testing-library/react";
import * as jestDOM from '@testing-library/jest-dom';
import CommentsComponent from "../index";
import {fakeUser, loggedOutUser} from "../../../utils/testHelpers/fixtures/user";
import {fakeComments} from "../../../utils/testHelpers/fixtures/coments";
// import commonTests from "../../../utils/testHelpers/commonTests";

expect.extend(jestDOM)
const mockedAddComment = jest.fn()
const removeCommentMocked = jest.fn()
const getCommentsMocked = jest.fn()

test('renders CommentsComponent', () => {
    const { getByLabelText } = render(<CommentsComponent
        user={fakeUser}
        addComment={mockedAddComment}
        recipeId={'1'}
        removeComment={removeCommentMocked}
        getComments={getCommentsMocked}
        comments={fakeComments}
    />)
    const commentForm = getByLabelText(/dodaj komentarz/i)
    expect(commentForm).toBeInTheDocument()
})

test('renders CommentsComponent without comment form', () => {
    const { queryByLabelText, getByRole } = render(<Router>
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
    expect(heading).toHaveTextContent('Musisz sie zalogowac zeby dodac komentarz')
    expect(queryByLabelText(/dodaj komentarz/i)).not.toBeInTheDocument()
})
//
// const renderCommentsComponent = render(<CommentsComponent
//     user={fakeUser}
//     addComment={mockedAddComment}
//     recipeId={'1'}
//     removeComment={removeCommentMocked}
//     getComments={getCommentsMocked}
//     comments={fakeComments}
// />)
//
// commonTests(renderCommentsComponent)