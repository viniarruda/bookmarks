import React, { useEffect } from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'
import Form from '../components/form'
import Button from '../components/button'
import Error from '../components/error'
import { requiredTag } from '../../../../utils/validators'
import inputText from '../components/inputText'

const SearchForm = (props) => {
  
  const {handleSubmit, submitting, error} = props;
  
  return (
    <Form>
      <Button onClick={handleSubmit} disabled={submitting}>
        <i className="fa fa-search" />
      </Button>
      { !!error && <Error>{error}</Error> }
      <Field
        validate={[requiredTag]}
        name="search"
        component={inputText}
        type="text"
        placeholder="Search by tag"
        />
    </Form>
    )
}

export default reduxForm({
  form: 'searchForm'
})(SearchForm)