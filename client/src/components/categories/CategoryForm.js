import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import CategoryField from './CategoryField';

class CategoryForm extends Component {
  componentWillReceiveProps = nextProps => {
    const { category } = nextProps;
    if (category.id !== this.props.category.id) {
      this.props.initialize(category);
    }
  };

  renderFields() {
    return (
      <div>
        <Field
          key="title"
          component={CategoryField}
          type="text"
          label="Title"
          name="title"
        />
        <Field
          key="budgetLimit"
          component={CategoryField}
          type="number"
          label="Budget"
          name="budgetLimit"
        />
        <Field
          key="isActive"
          component={CategoryField}
          name="isActive"
          label="Active"
        />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <div className="pa4 black-80">
          <h3 className="f2 fw6 ph0 mh0" 
            style={{ marginTop: '1em' }}>
            {this.props.category.id ? 'Edit Category' : 'Add New Category'}
          </h3>
          <form onSubmit={handleSubmit}>
            {this.renderFields()}
            <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit" style={{paddingLeft:15}}>
              Submit
            </button>
            <div className="lh-copy ph3 pv2 mt3">
              <Link className="f6 link dim black db pointer" to="/categories">
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

  if (values.budgetLimit && isNaN(values.budgetLimit)) {
    errors.budgetLimit = 'Budget Limit must be a number!';
  }

  if (!values.title) {
    errors.title = 'This line is required!';
  }

  if (!values.isActive) {
    errors.isActive = 'This input is required!';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'categoryForm'
})(CategoryForm);
