import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CommentForm = () => {
  const field = ({ input, type, label, meta: { error, touched } }) => (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-250-l mw6 shadow-5 center">
      <div className="pa4 black-80">
        <div className="mv3">
          <label className="db fw6 lh-copy f5">{label}</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            {...input} style={{ marginBottom: '5px' }} type={type} />
          <div style={{ marginBottom: '20px' }}>
            {touched && error}
          </div>
        </div>
      </div>
    </article>
  )
  return (
    <Field
      key="commentLine"
      type="text"
      label="Comment"
      name="commentLine"
      component={field}
    />
  )
}

export default reduxForm({
  form: 'commentForm'
})(CommentForm)
