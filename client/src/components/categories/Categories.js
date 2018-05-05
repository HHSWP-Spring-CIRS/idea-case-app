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
        <div key={category.id}>
          <div>
            <span>{category.title}</span>
            <p>
              Budget:{' '}
              {!category.budgetLimit ? 'Not specified' : category.budgetLimit}
            </p>
            <p>Active: {category.isActive === 1 ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <Link to={`/categories/update/${category.id}`}>Edit</Link>
            <button
              onClick={() => this.props.deleteCategory(category.id)}
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
        {this.renderCategories()}
        <div>
          <Link to="/categories/new">
            <i>Add new category</i>
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
