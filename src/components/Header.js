import React from "react";

const Header = ({ title }) => {
  return (
    <h3 className="ui horizontal divider header teal">
      <i className="circular users icon"></i>
      {title}
    </h3>
  );
};

export default Header;
