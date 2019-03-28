import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, FieldArray, initialize } from 'redux-form'
import Form from '../components/form'
import Button from '../components/button'
import Error from '../components/error'
import { required } from '../../../../utils/validators'
import inputText from '../components/inputText'

class EditBookmarksForm extends React.Component {
  
  componentWillMount() {
    const { load, bookmarks, index, initialize } = this.props
    const data = {
      title: bookmarks.list[index].title,
      url: bookmarks.list[index].url,
      tags: bookmarks.list[index].newTags.join(" ")
    }
    initialize(data);
  }

  render() {
    const {handleSubmit, submitting, error, index, bookmarks} = this.props;
    
    return (
      <Form>
        { !!error && <Error>{error}</Error> }
        <Field
          name="title"
          component={inputText}
          type="text"
          placeholder="Título"
          label='Titulo:' 
          value={bookmarks.list[index].title} />
        <Field
          name="url"
          component={inputText}
          type="text"
          placeholder="Url"
          label='Url:' />
        <Field
          name="tags"
          component={inputText}
          type="text"
          placeholder="Tags"
          label='Tags:' />
        <Button onClick={handleSubmit} disabled={submitting}>
          <i className="fa fa-search" />
        </Button>
      </Form>
    )
  }
}
const mapStateToprops = (state) => ({
  bookmarks: state.bookmarks
})

EditBookmarksForm = connect(mapStateToprops)(EditBookmarksForm)

export default reduxForm({
  form: 'editForm'
})(EditBookmarksForm)