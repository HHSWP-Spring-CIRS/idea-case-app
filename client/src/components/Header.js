import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
              <li className='f2 black bg-animate hover-bg-light-blue pointer'>
                <Link to="/">Ideas</Link>
              </li>
              <li className='f2 black bg-animate hover-bg-light-blue pointer'>
                <Link to="/categories">Categories</Link>
              </li>
              <li className='f2 black bg-animate hover-bg-light-blue pointer'>
                <Link to="/members">Members</Link>
              </li>
        </nav>
        <p className='f1'>Idea Case App</p>
      </header>

    )
  }
}

export default Header
