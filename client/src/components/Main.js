import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Ideas from './ideas/Ideas'

class Main extends Component {
  render() {
    return (
      <div>
        <Ideas />
        <div className="addNew">
          <Link to="/ideas/new">
            <i className="material-icons">add_circle_outline</i>
            <span className="f3"> Add new idea</span>
          </Link>
        </div>
      </div>
    )
  }
}

export default Main
