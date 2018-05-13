import React from 'react';

import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = () => (

  <header>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Wedodo</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <Link to="/login">Logout</Link>
          <MenuItem eventKey={3.1}>Logout</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>

    <hr />
  </header>
);

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
