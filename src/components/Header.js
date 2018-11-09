import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <header className="app-header">
      <div
        role="button"
        tabIndex="0"
        className="menu-btn"
        onClick={props.toggleSidebar}
        onKeyUp={e => (e.key === "Enter" ? props.toggleSidebar() : "")}
      >
        <span className="menu-btn__bar" aria-hidden="true" />
        <span className="menu-btn__bar" aria-hidden="true" />
        <span className="menu-btn__bar" aria-hidden="true" />

        <span className="sr-only">Toggle Side Navigation</span>
      </div>

      <h1 className="app-title">Spots Near Secunderabad</h1>
    </header>
  );
}

Header.propTypes = {
  toggleSidebar: PropTypes.func
};
