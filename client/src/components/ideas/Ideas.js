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
        <article className="br3 ba b--black-10 mv4 w-100 w-150-m w-200-l mw6 shadow-5 center">
          <div key={idea.id}>
            <div className="pa4 black-80">
              <Link to={`/ideas/${idea.id}`}>
                <p className="f4 fw6 ph0 mh0">{idea.title}</p>
                <p className="f4 fw6 ph0 mh0">{idea.description}</p>
                <p className="f4 fw6 ph0 mh0">
                  Sent On: {new Date(idea.creationDate).toLocaleDateString()}
                </p>
              </Link>
            </div>
            <div className="pa4 black-80">
              <Link 
                className="b ph3 pv2 input-reset ba b--black bg-transparent br3 grow pointer f6 dib"
                to={`/ideas/update/${idea.id}`}>Edit</Link>
              <button
                className="b ph3 pv2 input-reset ba b--red bg-transparent br3 grow pointer f6 dib"
                onClick={() => this.props.deleteIdea(idea.id)}
                style={{marginLeft:15}}
              >
                Delete
              </button>
            </div>
          </div>
        </article>
      );
    });

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({ ideas: state.ideaStore.ideas });

export default connect(mapStateToProps, { fetchIdeas, deleteIdea })(Ideas);
