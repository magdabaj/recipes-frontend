/**
 *
 * AllRecipesComponent
 *
 */

// todo configure prettier, babel, eslint
// todo animated todo list
//

import React, { memo } from 'react';
import '../../containers/HomePage/index.css';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { Tween, Timeline } from 'react-gsap';
import Spinner from '../Spinner';
// import Carousel from '../Carousel';

function AllRecipesComponent({ recipes, ...props }) {
    return (
        <section className={'latest-recipes'}>
            {/*<Carousel recipes={recipes} {...props} />*/}
            <Tween staggerFrom={{ x: '100px' }} stagger={0.2} duration={0.8} ease="Power4.inOut">
                <div className={'recipes-header'}>
                    <p>Najnowsze wpisy</p>
                </div>
            </Tween>
            {/*<Tween */}
            {/*  transformOrigin={"50% 50%"} duration={2} rotation={360}*/}
            {/*       staggerFrom={{*/}
            {/*         opacity: 0,*/}
            {/*         cycle: {*/}
            {/*           rotationX: [-90, 90],*/}
            {/*           transformOrigin: ['50% top -100', '50% bottom 100']*/}
            {/*         },*/}
            {/*       }}*/}
            {/*>*/}
            {/*  <h1>Hellloo</h1>*/}
            {/*</Tween>*/}
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
                            <h2>We're waiting for server response</h2>
                            <Spinner width={'80%'} height={'80%'} />
                        </div>
                    )}
                </div>
            </div>
            <Pagination {...props} />
        </section>
    );
}

AllRecipesComponent.propTypes = {};

export default memo(AllRecipesComponent);
