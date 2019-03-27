import React from 'react'
import styled from 'styled-components'
import colors from '../../../layout/styled-components/colors'

const InputContent = styled.div`
  display: flex;
  flex-flow: column;
`;

const Label = styled.label`
  padding-right: 5px;
  font-size: 11px;
  font-weight: 700;
  color: ${colors.gray};
`;

const Input = styled.input`
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid ${colors.default};
  padding: 5px;
  &:focus {
    border: 2px solid ${colors.blue};
  }
`;

const Error = styled.span`
  color: red;
  font-size: 13px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const inputText = ({
  input,
  label,
  type,
  classname,
  placeholder,
  meta: { touched, error }
}) => (
  <InputContent>
    <FlexRow>
      <Label>{label}</Label>
      <Input {...input} placeholder={placeholder} type={type} className={classname} />
    </FlexRow>
    <div>
      {touched &&
        (error && <Error>{error}</Error>)
      }
    </div>
  </InputContent>
)

export default inputText