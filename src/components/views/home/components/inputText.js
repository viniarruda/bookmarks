import React from 'react'
import styled from 'styled-components'
import colors from '../../../layout/styled-components/colors'

const InputContent = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  @media (max-width: 500px) {
    max-width: ${props => props.max};
    margin: 5px 0;
  }
`;

const Input = styled.input`
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid ${colors.gray};
  margin: 0 5px;
  padding: 15px;
  font-size: 16px;
  color: ${colors.gray};
  flex: 1;
  &:focus {
    border: 2px solid ${colors.default};
  }
  @media (max-width: 500px) {
    width: auto;
    max-width: 80%;
    padding: 10px;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 16px;
`;

const Margin = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  text-align: left;
`;

const FlexRow = styled.div`
  display: flex;
  flex-flow: row wrap;
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
    {
      touched &&
        <Margin>
          {touched &&
            (error && <Error>{error}</Error>)
          }
        </Margin>
    }
  </InputContent>
)

export default inputText