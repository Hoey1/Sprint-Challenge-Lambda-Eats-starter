import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
        {/* <i class="fas fa-pizza-slice"></i> */}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Lambda Eats",
  icon: "fas fa-pizza-slice",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
