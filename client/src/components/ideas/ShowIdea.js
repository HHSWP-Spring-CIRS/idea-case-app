import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIdea, deleteIdea, newIdea } from '../../actions/ideaActions';
import { fetchComments } from '../../actions/commentActions';
import { Link, withRouter } from 'react-router-dom';
import Comments from '../comments/Comments';

class ShowIdea extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchIdea(id);
  }

  componentWillUnmount() {
    this.props.newIdea();
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deleteIdea(id, this.props.history);
  };

  renderComments = () => {
    const { idea } = this.props;
    return idea.isReadyForComments ? (
      <Comments comments={idea.comments} />
    ) : (
      <p>Comments are disabled</p>
    );
  };

  render() {
    const { idea } = this.props;

    return (
      <div>
        <div key={idea.id}>
          <div>
            <span>{idea.title}</span>
            <p>{idea.description}</p>
            <p>Budget: {idea.budget}</p>
            <p>People needed: {idea.peopleNeeded}</p>
            <p>
              Sent On: {new Date(idea.creationDate).toLocaleDateString()}
            </p>
            <br />
            <p>
              Last Modified: {idea.lastModifed}
            </p>
          </div>
          <div>
            <button onClick={this.props.history.goBack}>
              Back
            </button>
            <Link
              to={`/ideas/update/${idea.id}`}
              style={{ marginLeft: '25px' }}
            >
              Edit
            </Link>
            <button onClick={this.onDeleteClick} style={{marginLeft:15}}>
              Delete
            </button>
          </div>
        </div>
        {this.renderComments()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  idea: state.ideaStore.idea
});
export default connect(mapStateToProps, {
  fetchIdea,
  deleteIdea,
  fetchComments,
  newIdea
})(withRouter(ShowIdea));
