import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="site-title">
            <Link to="/" onClick={props.handleLogoClick}>TODO App</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleLogoClick: PropTypes.func,
};

export default Header;
