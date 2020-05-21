/**
 *
 * Select
 *
 */

import React, { useState } from 'react';
import _ from 'lodash';
import '../../containers/RecipesFormContainer/index.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Select({ tags, tagType, onChange, error }) {
    const [tagValues, hideTagValues] = useState(false);
    const changeVisibility = () => hideTagValues(!tagValues);

    function sortTags(tagType) {
        return tags.map(tag => {
            if (tag.tagType === tagType) {
                return { tagValue: tag.tagValue, tagId: tag.id };
            }
        });
    }
    let sortedTags = _.compact(sortTags(tagType));

    return (
        <div className={'select'}>
            <label htmlFor={tagType} onClick={() => changeVisibility()} className={'select-tag-type'}>
                {tagType}
            </label>
            {tagValues
                ? sortedTags.map(tag => (
                    <div>
                        <input
                            type="radio"
                            id={tag.tagId}
                            name={'tagId'}
                            value={parseInt(tag.tagId)}
                            onChange={onChange}
                            className={'checkbox-input'}
                        />
                        <label htmlFor={tag.tagId} className={'checkbox-label'}>
                            {tag.tagValue}
                        </label>
                        <div className={'checkbox-control'} />
                    </div>
                ))
                : null}
        </div>
    );
}

Select.propTypes = {};

export default Select;
