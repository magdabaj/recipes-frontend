/**
 *
 * AllUserRecipes
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoIosAddCircle } from 'react-icons/io';
import { TiDeleteOutline } from 'react-icons/all';
import { FiEdit } from 'react-icons/all';
import { Timeline, Tween } from 'react-gsap';
import Pagination from '../Pagination';
import '../../containers/HomePage/index.css';

const UserRecipesComponent = ({ recipes, user, route, ...props }) => {
    return (
        <section>
            <div className={'recipes-header'}>
                <p>Najnowsze wpisy</p>
            </div>
            <Timeline
                target={
                    <div className={'container'}>
                        <div className={'wrapper'}>
                            {recipes.length > 0 ? (
                                recipes.map(recipe => (
                                    <div className={'recipe-container'}>
                                        <Link to={`/recipes/${recipe.id}`}>
                                            <img className={'recipeImg'} src={recipe.image} alt={recipe.title} />
                                        </Link>
                                        <div className={'recipe-img-hover'}>
                                            <IconContext.Provider value={{ className: 'img-icon-hover', size: '80px' }}>
                                                <TiDeleteOutline
                                                    onClick={() => {
                                                        props.deleteRecipe(recipe.id);
                                                    }}
                                                />
                                            </IconContext.Provider>

                                            <IconContext.Provider value={{ className: 'img-icon-hover', size: '80px' }}>
                                                <Link to={`/add/${user.userId}/recipe/${recipe.id}`}>
                                                    <FiEdit />
                                                </Link>
                                            </IconContext.Provider>
                                        </div>
                                        <h2 className={'recipe-link'}>
                                            <Link to={`/recipes/${recipe.id}`} className={'recipe-link--a'}>
                                                {recipe.title}
                                            </Link>
                                        </h2>
                                    </div>
                                ))
                            ) : (
                                <h1>You have no recipes yet</h1>
                            )}
                        </div>
                    </div>
                }
            >
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
            </Timeline>

            <div>
                <IconContext.Provider value={{ className: 'add-icon', size: '80px' }}>
                    <Link to={`/add/${user.userId}`}>
                        <IoIosAddCircle />
                    </Link>
                    <div className={'button-text'}>Click to add recipe</div>
                </IconContext.Provider>
            </div>
            <Pagination route={route} {...props} />
        </section>
    );
};

UserRecipesComponent.propTypes = {};

export default UserRecipesComponent;
