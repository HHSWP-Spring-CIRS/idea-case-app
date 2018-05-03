import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Ideas from './ideas/Ideas'

class Main extends Component {
  render() {
    return (
      <div>
        <Ideas />
        <div>
          <Link to="/ideas/new" className="btn-floating btn-large red">
            <i>add</i>
          </Link>
        </div>
      </div>
    )
  }
}

export default Main
