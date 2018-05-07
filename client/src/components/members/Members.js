import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchMembers, deleteMember } from '../../actions/memberActions';

class Members extends Component {
  componentDidMount() {
    this.props.fetchMembers();
  }

  renderMembers() {
    return _.map(this.props.members, member => {
      return (
        <div  className="list">
          <article className="br3 ba b--black-10 mv4 w-100 w-150-m w-200-l mw6 shadow-5 center">
            <div key={member.id}>
              <div className="pa4 black-80">
                <p className="f4 fw6 ph0 mh0">{member.userName}</p>
                <p className="f4 fw6 ph0 mh0">{member.email}</p>
              </div>
              <div className="pa4 black-80">
                <Link 
                  className="b ph3 pv2 input-reset ba b--black bg-transparent br3 grow pointer f6 dib"
                  to={`/members/update/${member.id}`}>Edit</Link>
                <button
                  className="b ph3 pv2 input-reset ba b--red bg-transparent br3 grow pointer f6 dib"
                  onClick={() => this.props.deleteMember(member.id)}
                  style={{marginLeft:15}}
                >
                  Delete
                </button>
              </div>
            </div>
          </article>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderMembers()}
        <div className="addNew">
          <Link to="/members/new">
            <i className="material-icons">person_add</i>
            <span className="f3"> Add new member</span>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.memberStore.members
  };
}

export default connect(mapStateToProps, { fetchMembers, deleteMember })(
  Members
);
