import React from 'react'
import styled from 'styled-components'
import colors from '../../../layout/styled-components/colors'

const InputContent = styled.div`
  display: flex;
  flex-flow: column;
`;

const Input = styled.input`
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid ${colors.gray};
  margin: 0 15px;
  padding: 15px;
  width: 300px;
  font-size: 16px;
  color: ${colors.gray};
  &:focus {
    border: 2px solid ${colors.default};
  }
`;

const Error = styled.span`
  color: red;
  font-size: 16px;
`;

const Margin = styled.div`
  margin-top: 10px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const inputText = ({
  input,
  type,
  classname,
  placeholder,
  meta: { touched, error }
}) => (
  <InputContent>
    <FlexRow>
      <Input {...input} placeholder={placeholder} type={type} className={classname} />
    </FlexRow>
    <Margin>
      {touched &&
        (error && <Error>{error}</Error>)
      }
    </Margin>
  </InputContent>
)

export default inputText