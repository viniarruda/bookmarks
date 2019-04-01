import React from 'react'
import styled from 'styled-components'
import colors from './colors'

const Icon = styled.i`
  font-size: 30px;
  color: ${props => props.color === 'default' ? colors.default : colors.gray};
  padding: 10px 20px 20px;
  cursor: pointer;
  &:hover {
    opacity: .6;
  }
`;

export default Icon