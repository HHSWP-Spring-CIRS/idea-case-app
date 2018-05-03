import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIdeas } from '../../actions/ideaActions';
import { deleteIdea } from '../../actions/ideaActions';

class Ideas extends Component {
  componentDidMount() {
    this.props.fetchIdeas();
  }

  renderList = () =>
    _.map(this.props.ideas, idea => {
      return (
        <div key={idea.id}>
          <div>
            <Link to={`/ideas/${idea.id}`}>
              <span>{idea.title}</span>
              <p>{idea.description}</p>
              <p>
                Sent On: {new Date(idea.creationDate).toLocaleDateString()}
              </p>
            </Link>
          </div>
          <div>
            <Link to={`/ideas/update/${idea.id}`}>Edit</Link>
            <button
              onClick={() => this.props.deleteIdea(idea.id)}
              style={{marginLeft:15}}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({ ideas: state.ideaStore.ideas });

export default connect(mapStateToProps, { fetchIdeas, deleteIdea })(Ideas);
