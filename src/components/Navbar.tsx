import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="uk-container">
      <div className="uk-navbar">
        <div className="uk-navbar-left">
          <Link style={{color: '#363535'}} to="/" className="uk-navbar-item uk-logo">Todo App</Link>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/create">
                <span style={{color: '#363535'}} uk-icon="icon: plus; ratio: 1.2"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar