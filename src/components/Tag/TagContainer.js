// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';

const TagContainer = styled.li`
  transition: 0.3s;
  cursor: pointer;
  text-transform: lowercase;

  &:before {
    content: '•';
    padding-right: 8px;
    color: #ee4c7c;
  }

  &:hover {
    color: #ee4c7c;
  }
`;

export default TagContainer;
