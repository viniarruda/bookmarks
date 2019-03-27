import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  -webkit-transition: all .3s ease;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border: none;
  background-color: rgba(0,0,0,0.1);
  padding: 6px 10px;
  align-self: baseline;
  cursor: pointer;
  &:hover {
    opacity: .5;
  }
`;

export default Button