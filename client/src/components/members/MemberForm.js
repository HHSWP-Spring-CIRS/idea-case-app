import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import MemberField from './MemberField';

class MemberForm extends Component {
  componentWillReceiveProps = nextProps => {
    const { member } = nextProps;
    if (member.id !== this.props.member.id) {
      this.props.initialize(member);
    }
  };

  renderFields() {
    return (
      <div>
        <Field
          key="userName"
          component={MemberField}
          type="text"
          label="Username"
          name="userName"
        />
        <Field
          key="email"
          component={MemberField}
          type="email"
          label="Email"
          name="email"
        />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <aticle className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <div className="pa4 black-80">
          <h3 className="f2 fw6 ph0 mh0"
            style={{ marginTop: '1em' }}>
            {this.props.member.id ? 'Edit Member' : 'Add New Member'}
          </h3>
          <form onSubmit={handleSubmit}>
            {this.renderFields()}
            <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit" style={{marginLeft:15}}>
              Submit
            </button>
            <div className="lh-copy ph3 pv2 mt3">
              <Link className="f6 link dim black db pointer" to="/members">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </aticle>

    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.userName) {
    errors.userName = 'This line is required!';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'memberForm'
})(MemberForm);
