import React from 'react'
import styled from 'styled-components'
import colors from '../../../layout/styled-components/colors'

const AccordionContent = styled.div`
  background-color: ${colors.default};
  padding: 10px 15px;
  border-top: 1px solid ${colors.gray};
`;

const Message = styled.h2`
  margin: 10px 0;
`;

const Sha = styled.a`
  word-break: break-word;
  line-height: 1.4;
`;

const Accordion = (props) => {
  return (
    <AccordionContent>
      <Message>Message: {props.message}</Message>
      <Sha href={props.url} target="_blank">{props.sha}</Sha>
    </AccordionContent>
  )
}

export default Accordion