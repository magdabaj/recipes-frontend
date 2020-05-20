import React from 'react';
import styled from 'styled-components';
import colorStyles from '../../utils/colorStyles';

const AddRatingButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 15px;
  color: ${colorStyles.mediumPink};
  font-weight: 600;
  font-size: 1.5vw;
  border-bottom: 1px solid ${colorStyles.mediumPink};
  line-height: 1.15;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    width: 100%;
    padding: 15px 0;
  }
`;

export default AddRatingButton;
