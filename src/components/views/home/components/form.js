import React from 'react'
import styled from 'styled-components'

const Form = styled.div`
  padding: 40px 20px;
  border-radius: 5px;
  text-align: center;
  position: relative;
  display: flex;
  flex-flow: row;
  max-width: 85%;
  flex: 1;
  justify-content: center;
  @media (max-width: 500px) {
    max-width: 100%;
  }
`;


export default Form