import React from 'react';

import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = ({ loggedIn, onSelect }) => {
  const menu = (loggedIn) => {
    return loggedIn ?
      (<Nav pullRight>
        <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} onSelect={onSelect}>Logout</MenuItem>
        </NavDropdown>
      </Nav>)
      : null
  }

  return (
    <header>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Wedodo</Link>
          </Navbar.Brand>
        </Navbar.Header>
        {menu(loggedIn)}
      </Navbar>
      <hr />
    </header>
  );
}

export default Header;

/*

    <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Wedodo</Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav pull-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false">User<span className="caret"></span></a>
              <ul className="dropdown-menu">
                <Link to="/login">Logout</Link>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </nav>
 */
