import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
  static path = '/';
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item nav-link active"><Link to='/'>Home</Link></li>
                    <li className="nav-item nav-link"><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
  }
}

export default Header;
