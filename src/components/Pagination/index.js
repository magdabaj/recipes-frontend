/**
 *
 * Pagination
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { matchPath } from "react-router-dom";
import Container from './Container';
import './index.css';
import PropTypes from 'prop-types';

// todo hover div over icons

function Pagination({ totalPages, previousPage, nextPage, ...props }) {
    let i = 1;
    // eslint-disable-next-line no-unused-vars
    let totalPagesArray = new Array(totalPages).fill(0).map(_ => i++);
    let route = '';

    let isHomePathActive = !!matchPath(props.location.pathname, {path:[ '/', '/page/:pageId'], exact: true})
    let isTagPathActive = !!matchPath(props.location.pathname, '/tag/:tagId')
    // let isUserPathActive = !!matchPath(props.location.pathname, '/user-recipes')

    if (isHomePathActive) route = ''
    else if (isTagPathActive) route = `/tag/${props.tagId}`
    else route = '/user-recipes'

    return (
        <Container>
            <ul className={'pagination-list'}>
                <li>
                    <Link
                        to={previousPage ? `${route}/page/${previousPage.page}` : '#'}
                        className={'pagination-link'}
                    >
                        {'<<'}
                    </Link>
                </li>
                {totalPagesArray.map(page => (
                    <li key={page}>
                        <Link to={`${route}/page/${page}`} id={page} className={'pagination-link'}>
                            {page}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link to={nextPage ? `${route}/page/${nextPage.page}` : '#'} className={'pagination-link'}>
                        {'>>'}
                    </Link>
                </li>
            </ul>
        </Container>
    );
}

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    previousPage: PropTypes.object,
    nextPage: PropTypes.object,
    location: PropTypes.object,
    tagId: PropTypes.string,

};

export default Pagination;
