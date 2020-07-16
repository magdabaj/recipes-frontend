/**
 *
 * TagsListComponent
 *
 */

import React, {memo} from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';

import tagTypes from '../../utils/tagTypes';

function TagsListComponent({ tags }) {
    return tagTypes.map(tagType => <Tag key={tagType} tags={tags} tagType={tagType} />);
}

TagsListComponent.propTypes = {
    tags: PropTypes.array.isRequired,
};

export default memo(TagsListComponent);
