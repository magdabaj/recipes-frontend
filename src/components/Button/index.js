/**
 *
 * Button
 *
 */
// eslint-disable-next-line
import React from 'react';
import colorStyles from '../../utils/colorStyles';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${colorStyles.darkPink};
  color: #fff;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  padding: 15px 25px;
  margin: 2vw;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 5px;

  &:hover {
    background-color: #fff;
    color: ${colorStyles.darkPink};
  }
  
  @media(max-width: 768px) {
    
  }
`;

export default Button;
