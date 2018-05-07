import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchCategories, deleteCategory } from '../../actions/categoryActions';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderCategories() {
    return _.map(this.props.categories, category => {
      return (
        <article className="br3 ba b--black-10 mv4 w-100 w-150-m w-200-l mw6 shadow-5 center">
          <div key={category.id}>
            <div className="pa4 black-80">
              <p className="f4 fw6 ph0 mh0">{category.title}</p>
              <p className="f4 fw6 ph0 mh0">
                Budget:{' '}
                {!category.budgetLimit ? 'Not specified' : category.budgetLimit}
              </p>
              <p>Active: {category.isActive === 1 ? 'Yes' : 'No'}</p>
            </div>
            <div className="pa4 black-80">
              <Link
                className="b ph3 pv2 input-reset ba b--black bg-transparent br3 grow pointer f6 dib"             
                to={`/categories/update/${category.id}`}>Edit</Link>
              <button
                className="b ph3 pv2 input-reset ba b--red bg-transparent br3 grow pointer f6 dib"
                onClick={() => this.props.deleteCategory(category.id)}
                style={{marginLeft:15}}
              >
                Delete
              </button>
            </div>
          </div>
        </article>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderCategories()}
        <div  className="addNew">
          <Link to="/categories/new">
            <i className="material-icons">library_add</i>
            <span className="f3"> Add new category</span>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryStore.categories
  };
}

export default connect(mapStateToProps, { fetchCategories, deleteCategory })(
  Categories
);
