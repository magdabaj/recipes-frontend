// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  // flex-direction: row;
  // justify-content: center;
  // align-content: space-evenly;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export default FormContainer;
