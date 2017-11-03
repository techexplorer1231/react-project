/**
*
* Navigation
*
*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import imgUrl from 'images/logo.png';

import Img from 'components/Img/Loadable';

function Navigation() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg mb-3">
      <div className="navbar-brand">
        <Img
          src={imgUrl}
          width="300"
          height="60"
          className="d-inline-block align-top"
          alt="Banner"
        />
      </div>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              to="/detail"
              activeClassName="active"
            >
              Detail
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navigation.propTypes = {};

export default Navigation;
