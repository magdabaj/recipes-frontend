/**
 *
 * CommentsComponent
 *
 */

import React from 'react';
import '../../containers/RecipeContainer/index.css';
import CommentForm from '../CommentForm';
import { Link } from 'react-router-dom';
import fetchStates from "../../utils/fetchStates";
import { toast } from "react-toastify";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CommentsComponent({
                               comments,
                               addComment,
                               recipeId,
                               user,
                               getComments,
                               editComment,
                               removeComment,
                               ...props
                           }) {
    return (
        <section className={'comments-container'}>
            {user.loggedIn ? (
                <CommentForm
                    addComment={addComment}
                    recipeId={recipeId}
                    user={user}
                    getComments={getComments}
                    {...props}
                />
            ) : (
                <h3>
                    <Link to={'/login'}>Musisz sie zalogowac zeby dodac komentarz</Link>
                </h3>
            )}
            <div>
                {comments.map(comment => (
                    <ol className={'comments-list'}>
                        <li className={'comment-body'}>
                            <article className={'comment-article'}>
                                <footer className={'comment-title'}>
                                    <div className={'comment-author'}>{comment.email}</div>
                                    <div className={'comment-data'}>
                                        {comment.addedDate.replace(/\T/, ' o ').replace(/.Z/g, '')}
                                    </div>
                                </footer>
                                <div className={'comment-content'}>
                                    <p>{comment.content}</p>
                                </div>
                                {comment.email.trim() === user.email ? (
                                    <div className={'comment-edit'}>
                                        <div className={'comment-edit--button'}>Edit</div>
                                        <div
                                            className={'comment-edit--button'}
                                            onClick={() => removeComment(comment.id)}
                                        >
                                            Remove
                                        </div>
                                    </div>
                                ) : null}
                            </article>
                        </li>
                    </ol>
                ))}
            </div>
        </section>
    );
}

CommentsComponent.propTypes = {};

export default CommentsComponent;
