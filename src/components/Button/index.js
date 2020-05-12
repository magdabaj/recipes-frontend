/**
 *
 * Button
 *
 */

import React from 'react';
import colorStyles from '../../containers/App/colorStyles';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #fff;
  color: black;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  padding: 15px 25px;
  margin: 2vw;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 5px;

  &:hover {
    background-color: ${colorStyles.darkPink};
    color: white;
  }
  
  @media(max-width: 768px) {
    
  }
`;

export default Button;
