import React from "react";

export default function Header(props) {
  return (
    <header className="site-header">
      <a href="#" className="menu" onClick={props.toggleSidebar}>
        <span className="menu__bar" aria-hidden="true" />
        <span className="menu__bar" aria-hidden="true" />
        <span className="menu__bar" aria-hidden="true" />

        <span className="sr-only">Toggle Side Navigation</span>
      </a>

      <h1 className="site-title">Spots Near Secunderabad</h1>
    </header>
  );
}
