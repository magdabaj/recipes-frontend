/**
 *
 * RecipeTextInput
 *
 */

import React, { memo } from 'react';
import '../../containers/RecipesFormContainer/index.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RecipeTextInput({ type, value, name, onChange, placeholder, label, error }) {
    let wrapperClass = 'input';
    if (error && error.length > 0) {
        wrapperClass += ' input-error';
    }
    return (
        <div className={'recipe-input-container'}>
            <label className={'label'}>{label}</label>
            <div className={'input-data input-data-recipe'}>
                <input
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={wrapperClass}
                />
                {error && <div className={'error-message'}>{error}</div>}
            </div>
        </div>
    );
}

RecipeTextInput.propTypes = {};

export default memo(RecipeTextInput);
