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
        <div key={member.id}>
          <div>
            <span>{member.userName}</span>
            <p>{member.email}</p>
          </div>
          <div>
            <Link to={`/members/update/${member.id}`}>Edit</Link>
            <button
              onClick={() => this.props.deleteMember(member.id)}
              style={{marginLeft:15}}
            >
              Delete
            </button>
          </div>
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
