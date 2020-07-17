
import React, { memo } from 'react';
import ReactLoading from 'react-loading';
import colorStyles from '../../utils/colorStyles';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px;
  // margin-top: 50%;
  // min-height: 800px;
  
  @media (max-width: 768px) {
    margin-top: 50px auto;
  }
  // @media (max-width: 769px) {
  //   margin-top: 90px
  // }
`;

const Spinner = ({ color = colorStyles.darkPink, width = '50%', height = '50%' }) => {
    return (
        <Wrapper>
            <ReactLoading
                color={color}
                type={'spinningBubbles'}
                height={height}
                width={width}
            />
        </Wrapper>
    );
};

Spinner.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
}

export default memo(Spinner);
