/**
 *
 * RecipesForm
 *
 */

// todo return parseInt value in route path selectors

import React, { useState, useEffect } from 'react';
import '../../containers/RecipesFormContainer/index.css';
import RecipeTextInput from '../RecipeTextInput';
import tagTypes from '../../utils/tagTypes';
import Select from '../Select';
import Button from '../Button';
import {Redirect} from "react-router";
import fetchStates from "../../utils/fetchStates";
import {toast} from "react-toastify";

const RecipesForm = ({ status, ...props }) => {
    const [cancel, setCancel] = useState(false)
    const [recipe, setRecipe] = useState({
        title: '',
        website: '',
        url: '',
        image: '',
        tagId: null,
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (props.recipeId) {
            const _recipe = props.recipes.find(recipe => recipe.id === parseInt(props.recipeId));
            setRecipe(_recipe);
        }
    }, []);

    const handleChange = event => {
        const { name, value } = event.target;

        setRecipe(prevRecipe => ({
            ...prevRecipe,
            [name]: value,
        }));
    };

    const formIsValid = () => {
        const { title, website, url, image, tagId } = recipe;
        const { userId } = props;
        const errors = {};

        if (!title) errors.title = 'Title is required';
        if (!website) errors.website = 'Website is required';
        if (!url) errors.url = 'Url is required';
        if (!image) errors.image = 'Image url is required';
        if (!userId) errors.authorization = 'You must login first';
        if (!tagId) errors.category = 'RecipeWrapper category is required';

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    function handleSave(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        try {
            props.addRecipe({ recipe: recipe, userId: parseInt(props.userId) });
        } catch (error) {
            setErrors({ handleSave: error.message });
        }
    }

    return (
        <div className={'recipes-form-container'}>
            <form className={'form'} onSubmit={handleSave}>
                <RecipeTextInput
                    name={'title'}
                    type={'text'}
                    value={recipe.title}
                    label={'Tytuł'}
                    placeholder={'Wpisz tytuł przepisu'}
                    onChange={handleChange}
                    error={errors.title}
                />
                <RecipeTextInput
                    name={'website'}
                    type={'text'}
                    value={recipe.website}
                    label={'Strona'}
                    placeholder={'Wpisz stronę źródłową'}
                    onChange={handleChange}
                    error={errors.website}
                />
                <RecipeTextInput
                    name={'url'}
                    type={'text'}
                    value={recipe.url}
                    label={'Url'}
                    placeholder={'Wpisz adres przepisu'}
                    onChange={handleChange}
                    error={errors.url}
                />
                <RecipeTextInput
                    name={'image'}
                    type={'text'}
                    value={recipe.image}
                    label={'Url zdjęcia'}
                    placeholder={'Wpisz url zdjęcia'}
                    onChange={handleChange}
                    error={errors.image}
                />
                <div className={'select-container'}>
                    {tagTypes.map(tagType => (
                        <Select tags={props.tags} tagType={tagType} onChange={handleChange} />
                    ))}
                    {errors.category && <div className={'error-message'}>{errors.category}</div>}
                </div>
                <div className={'buttons-container'}>
                    <Button
                        type={'submit'}
                        onSubmit={handleSave}
                    >
                        {recipe.id ? 'Edytuj' : 'Zapisz'} Przepis
                    </Button>
                    <Button
                       type={'button'}
                       onClick={() => setCancel(true)}
                    >
                        Cofnij
                    </Button>
                    {cancel && <Redirect to={'/user-recipes'}/>}
                </div>
            </form>
            {status === fetchStates.success ?
                (
                    // toast.success("Recipe added successfully"),
                    <Redirect to={'/user-recipes'}/>
                )
                : null}
        </div>
    );
};

RecipesForm.propTypes = {};

export default RecipesForm;
