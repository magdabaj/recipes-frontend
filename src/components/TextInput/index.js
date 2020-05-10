/**
 *
 * TextInput
 *
 */

import React from 'react';
import '../../containers/App/index.css';

function TextInput({ label, name, value, placeholder, onChange, error, type }) {
    let wrapperClass = 'input';
    if (error && error.length > 0) {
        wrapperClass += ' input-error';
    }
    return (
        <div className={'input-data'}>
            <label htmlFor={name} className={'login-label'}>
                {label}
            </label>
            <div className={'field'}>
                <input
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={wrapperClass}
                />
            </div>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
    );
}

TextInput.propTypes = {};

export default TextInput;
