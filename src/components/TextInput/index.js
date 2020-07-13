/**
 *
 * TextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../../containers/App/index.css';

function TextInput({ label, name, value, placeholder, onChange, error, type }) {
    let wrapperClass = 'input';
    if (error && error.length > 0) {
        wrapperClass += ' input-error';
    }
    return (
        <div className={'input-data'}>
            <label htmlFor={name} className={'login-label'} /*for={name}*/>
                {label}
            </label>
            <div className={'field'}>
                <input
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={wrapperClass}
                />
            </div>
            {error && <div className={'error-message'} data-testid={'error-message'}>{error}</div>}
        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any
};

export default TextInput;
