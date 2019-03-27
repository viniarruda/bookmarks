import React from 'react'
import styled from 'styled-components'

const Filters = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  max-width: 15%;
  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

export default Filters