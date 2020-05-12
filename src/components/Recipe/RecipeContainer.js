import React from 'react';
import styled from 'styled-components';
import colorStyles from '../../utils/colorStyles';

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3vw;
  color: ${colorStyles.darkRed};

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default RecipeContainer;
