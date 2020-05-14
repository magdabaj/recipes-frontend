/**
 *
 * Pagination
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { matchPath } from 'react-router';
import './index.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Pagination({ totalPages, previousPage, nextPage, ...props }) {
    let i = 1;
    let totalPagesArray = new Array(totalPages).fill(0).map(_ => i++);

    const isHomePathActive = !!matchPath(props.match.path, '/home');

    const isTagPathActive = !!matchPath(props.match.path, '/home/tag/:tagId');

    console.log('home path', isHomePathActive);
    console.log('tag path', isTagPathActive)

    let path = isHomePathActive
        ? '/home/page'
        : isTagPathActive
            ? `/home/tag/${props.tagId}/page`
            : '/user-recipes/page';

    return (
        <Container>
            <ul className={'pagination-list'}>
                <li>
                    <Link
                        to={previousPage ? `${path}/${previousPage.page}` : '#'}
                        className={'pagination-link'}
                    >
                        {'<<'}
                    </Link>
                </li>
                {totalPagesArray.map(page => (
                    <li key={page}>
                        <Link to={`${path}/${page}`} id={page} className={'pagination-link'}>
                            {page}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link to={nextPage ? `${path}/${nextPage.page}` : '#'} className={'pagination-link'}>
                        {'>>'}
                    </Link>
                </li>
            </ul>
        </Container>
    );
}

Pagination.propTypes = {};

export default Pagination;
