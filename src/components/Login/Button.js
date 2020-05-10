import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #9a1750;
  color: white;
  border: 1px solid #9a1750;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 15px;
  cursor: pointer;
  margin: 20px;
  border-radius: 5px;

  &:hover {
    background-color: white;
    color: #9a1750;
  }
  
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ButtonSmall = styled(Button)`
  padding: 5px 8px;

  @media (min-width: 768px) {
    font-size: 10px;
    margin-left: 5px;
    margin: 0;
    width: 50%
  }
`;

export default Button;
