import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Form from '../components/form'
import Icon from '../../../layout/styled-components/icon'
import IconSearch from '../components/iconSearch'
import GridField from '../components/gridField'
import GridInput from '../components/gridInput'
import Error from '../components/error'
import inputText from '../components/inputText'

const SearchForm = (props) => {
  
  const {handleSubmit, submitting, error} = props;
  
  return (
    <Form flexFlow="row">
      <GridField>
        <Icon className="fa fa-plus" padding='true' onClick={props.openSearch} />
        <IconSearch onClick={handleSubmit} disabled={submitting}>
          <i className="fa fa-search" />
        </IconSearch>
      </GridField>
      <GridInput>
        { !!error && <Error>{error}</Error> }
        <Field
          name="term"
          component={inputText}
          type="text"
          placeholder="Search by tag"
          />   
      </GridInput>
    </Form>
    )
}

export default reduxForm({
  form: 'searchForm'
})(SearchForm)