import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import IdeaField from './IdeaField';

class IdeaForm extends Component {
  componentWillReceiveProps = nextProps => {
    const { idea } = nextProps;
    if (idea.id !== this.props.idea.id) {
      this.props.initialize(idea);
    }
  };

  renderFields() {
    const FIELDS = [
      { label: 'Title', name: 'title', type: 'text' },
      { label: 'Description', name: 'description', type: 'text' },
      { label: 'Budget', name: 'budget', type: 'number' },
      { label: 'People needed', name: 'peopleNeeded', type: 'number' },
      { label: 'Enable comments?', name: 'isReadyForComments', type: 'radio' },
      {
        label: 'Categories',
        name: 'categoryId',
        type: 'options',
        data: this.props.categories
      }
    ];

    const options = data =>
      _.map(data, ({ id, title }) => (
        <option key={id} value={id}>
          {title}
        </option>
      ));

    return _.map(FIELDS, ({ label, name, type, data }) => {
      return (
        <Field
          key={name}
          component={IdeaField}
          inputType={type}
          label={label}
          name={name}
          options={options(data)}
        />
      );
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-250-l mw6 shadow-5 center">
        <div className="pa4 black-80">
          <h3 className="f2 fw6 ph0 mh0"
            style={{ marginTop: '1em' }}>
            {this.props.idea.id ? 'Edit Idea' : 'Add New Idea'}
          </h3>
          <form onSubmit={handleSubmit}>
            {this.renderFields()}
            <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit" style={{marginLeft:15}}>
              Submit
            </button>
            <div className="lh-copy ph3 pv2 mt3">
              <Link className="f6 link dim black db pointer" to="/">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </article>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please provide the title!';
  }
  if (!values.description) {
    errors.description = 'Description cannot be empty!';
  }
  if (!values.isReadyForComments) {
    errors.isReadyForComments = 'This input is required!';
  }
  if (!values.categoryId) {
    errors.categoryId = 'This input is required!';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'ideaForm'
})(IdeaForm);
