import React from 'react'
import styled from 'styled-components'
import colors from '../../../layout/styled-components/colors'

const IconSearch = styled.button`
  -webkit-transition: all .3s ease;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  border-radius: 5px;
  border: none;
  color: ${colors.default};
  background: transparent;
  padding: 5px 10px;
  align-self: center;
  cursor: pointer;
  font-size: 30px;
  flex: 1;
  max-width: 32%;
  &:hover {
    opacity: .5;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    max-width: 30%;
  }
`;

export default IconSearch