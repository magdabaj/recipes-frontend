/**
 *
 * AllRecipesComponent
 *
 */

// todo configure prettier, babel, eslint

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import '../../containers/HomePage/index.css';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Loadable';
import { Tween, Timeline } from 'react-gsap';
import Spinner from '../Spinner';

function AllRecipesComponent({ recipes, route, ...props }) {
    return (
        <section className={'latest-recipes'}>
            <div className={'recipes-header'}>
                <p>Najnowsze wpisy</p>
            </div>
            <div className={'container'}>
                <div className={'wrapper'}>
                    {recipes.length > 0 ? (
                        <Timeline
                            target={recipes.map(recipe => (
                                <div key={recipe.id} className={'recipe-container'}>
                                    <Link to={`/recipes/${recipe.id}`}>
                                        <img className={'recipeImg'} src={recipe.image} alt={recipe.title} />
                                    </Link>
                                    <h2 className={'recipe-link'}>
                                        <Link to={`/recipes/${recipe.id}`} className={'recipe-link--a'}>
                                            {recipe.title}
                                        </Link>
                                    </h2>
                                </div>
                            ))}
                        >
                            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                        </Timeline>
                    ) : (
                        <div>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h2>We're waiting for server response</h2>
                            <Spinner width={'80%'} height={'80%'} />
                        </div>
                    )}
                </div>
            </div>
            <Pagination route={route} {...props} />
        </section>
    );
}

AllRecipesComponent.propTypes = {
    recipes: PropTypes.array.isRequired,
    route: PropTypes.string,
};

export default memo(AllRecipesComponent);
