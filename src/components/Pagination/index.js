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

function Pagination({ totalPages, previousPage, nextPage, route, ...props }) {
    let i = 1;
    let totalPagesArray = new Array(totalPages).fill(0).map(_ => i++);

    console.log('route', route)

    return (
        <Container>
            <ul className={'pagination-list'}>
                <li>
                    <Link
                        to={previousPage ? `${route}/${previousPage.page}` : '#'}
                        className={'pagination-link'}
                    >
                        {'<<'}
                    </Link>
                </li>
                {totalPagesArray.map(page => (
                    <li key={page}>
                        <Link to={`${route}/${page}`} id={page} className={'pagination-link'}>
                            {page}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link to={nextPage ? `${route}/${nextPage.page}` : '#'} className={'pagination-link'}>
                        {'>>'}
                    </Link>
                </li>
            </ul>
        </Container>
    );
}

Pagination.propTypes = {};

export default Pagination;
