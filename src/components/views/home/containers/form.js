import React, { useEffect } from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'
import Form from '../components/form'
import Button from '../components/button'
import Error from '../components/error'
import { required } from '../../../../utils/validators'
import inputText from '../components/inputText'

const GithubForm = (props) => {
  
  const renderMembers = ({ fields, meta: { touched, error, submitFailed } }) => {
    useEffect(() => {
      if(fields.length === 0) {
        fields.push({})
      } 
    })
    const handleKeyPress = (e) => {
      if(e.keyCode === 13) {
        e.preventDefault();
      }
    }
    return (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push({})}>Add Tags</button>
          {(touched || submitFailed) && error && <span>{error}</span>}
        </li>
        {fields.map((tag, index) =>
          <li key={index}>
            <Field
              name={`${tag}.name`}
              type="text"
              component={inputText}
              onKeyDown={(e) => handleKeyPress(e)}
              label="Tags"/>
          </li>
        )}
      </ul>
    )
}

  const {handleSubmit, submitting, error} = props;
  
  return (
    <Form>
      <Button onClick={handleSubmit} disabled={submitting}>
        <i className="fa fa-plus" />
      </Button>
      { !!error && <Error>{error}</Error> }
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
    </Form>
    )
}

export default reduxForm({
  form: 'bookmarksForm'
})(GithubForm)