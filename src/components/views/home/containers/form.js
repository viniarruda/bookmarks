import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Form from '../components/form'
import Icon from '../../../layout/styled-components/icon'
import GridField from '../components/gridField'
import GridInput from '../components/gridInput'
import Button from '../components/button'
import Error from '../components/error'
import { required } from '../../../../utils/validators'
import inputText from '../components/inputText'

const GithubForm = (props) => {
  const {handleSubmit, submitting, error} = props;
  
  return (
    <Form flexFlow="row wrap" >
      <GridField>
        <Icon className="fa fa-search" onClick={props.openSearch} />
        <Button onClick={handleSubmit} disabled={submitting}>
          <i className="fa fa-plus" />
        </Button>
      </GridField>
      { !!error && <Error>{error}</Error> }
      <GridInput>
        <Field
          validate={[required]}
          name="title"
          component={inputText}
          type="text"
          placeholder="Title"
        />
        <Field
          name="url"
          component={inputText}
          type="text"
          placeholder="Link"
        />
        <Field
          name="tags"
          component={inputText}
          type="text"
          placeholder="Tags"
        />
      </GridInput>
    </Form>
    )
}

export default reduxForm({
  form: 'bookmarksForm'
})(GithubForm)