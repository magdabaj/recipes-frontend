/**
 *
 * TagComponent
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import _ from 'lodash';
import TagContainer from './TagContainer';
import TagTypeContainer from './TagTypeContainer';
import UlComponent from './UlComponent';
import { Link } from 'react-router-dom';

function TagComponent({ tags, tagType }) {
    const [tagValuesVisibility, changeTagsValueVisibility] = useState(false);

    function sortTags(tagType) {
        return tags.map(tag => {
            if (tag.tagType === tagType) {
                return { tagValue: tag.tagValue, tagId: tag.id };
            }
        });
    }
    let sortedTags = _.compact(sortTags(tagType));

    const toggleTagValues = () => {
        changeTagsValueVisibility(!tagValuesVisibility);
    };

    return (
        <TagTypeContainer>
      <span onClick={() => toggleTagValues()} className={'tag-type'}>
        {tagType}
      </span>
            <UlComponent>
                {tagValuesVisibility
                    ? sortedTags.map(tag => (
                        <Link key={tag.tagId} to={`/tag/${tag.tagId}`}>
                            <TagContainer id={tag.tagId}>{tag.tagValue}</TagContainer>
                        </Link>
                    ))
                    : null}
            </UlComponent>
        </TagTypeContainer>
    );
}

TagComponent.propTypes = {
    tags: PropTypes.array.isRequired,
    tagType: PropTypes.string.isRequired,
};

export default TagComponent;
