/**
 *
 * TagsListComponent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Tag from '../Tag';

import tagTypes from '../../utils/tagTypes';

function TagsListComponent({ tags }) {
    return tagTypes.map(tagType => <Tag tags={tags} tagType={tagType} />);
}

TagsListComponent.propTypes = {
    tags: PropTypes.array.isRequired,
};

export default TagsListComponent;
