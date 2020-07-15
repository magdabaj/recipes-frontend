/**
 *
 * CommentFormComponent
 *
 */

import React, { useState } from 'react';
import fetchStates from '../../utils/fetchStates';
import { toast } from 'react-toastify';
import '../../containers/RecipeContainer/index.css'
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CommentFormComponent({
                                  addComment,
                                  recipeId,
                                  user,
                                  // getComments,
                                  ...props
}) {
    const [comment, setComment] = useState({
        content: '',
        recipeId: null,
        email: '',
    });
    const [, setErrors] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;

        setComment(prevComment => ({
            ...prevComment,
            [name]: value,
        }));

        comment.email = user.email;
        comment.recipeId = recipeId;
    };

    const formIsValid = () => {
        const { content, email } = comment;
        const errors = {};

        if (!email) errors.email = 'Email is required';
        if (!content) errors.content = 'You cannot post empty comment';

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    function handleSave(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        try {
            addComment({
                recipeId: comment.recipeId,
                content: comment.content,
                email: comment.email,
            });
            comment.content = '';
        } catch (error) {
            setErrors({ handleSave: error.message });
        }

        if (props.addCommentStatus === fetchStates.error) toast.error(`${props.addCommentError}`);
    }

    return (
        <div className={'comment-form-container'}>
            <form className={'comment-form'} onSubmit={handleSave}>
                <label className={'comment-label'} htmlFor={'comment-area'}>Dodaj komentarz</label>
                <textarea
                    id={'comment-area'}
                    name={'content'}
                    value={comment.content}
                    placeholder={'Wpisz tresc komentarza'}
                    maxLength={2000}
                    onChange={handleChange}
                    className={'comment-text-area'}
                    data-testid={'comment-area'}
                />
                <button type={'submit'} onSubmit={handleSave} className={'comment-button'}>
                    {props.addCommentStatus === fetchStates.fetching ? 'Dodawanie...' : 'Dodaj komentarz'}
                </button>
            </form>
        </div>
    );
}

CommentFormComponent.propTypes = {
    addComment: PropTypes.func.isRequired,
    recipeId: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    // getComments: PropTypes.func.isRequired,
    addCommentStatus: PropTypes.string,
    addCommentError: PropTypes.string,
};

export default CommentFormComponent;
