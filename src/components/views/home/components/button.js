import React from 'react'
import styled from 'styled-components'
import colors from '../../../layout/styled-components/colors'

const Button = styled.button`
  -webkit-transition: all .3s ease;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  border-radius: 5px;
  border: 3px solid ${colors.default};
  color: ${colors.default};
  background: transparent;
  padding: 5px 10px;
  margin-top: 5px;
  cursor: pointer;
  font-size: 20px;
  max-width: 32%;
  flex: 1;
  &:hover {
    opacity: .5;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 5px;
  }
`;

export default Button