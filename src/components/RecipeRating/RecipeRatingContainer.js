// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';

const RecipeRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export default RecipeRatingContainer;
