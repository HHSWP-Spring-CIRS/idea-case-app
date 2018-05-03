import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/">Ideas</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/members">Members</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
