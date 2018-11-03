import React, { Component } from "react";
import PropTypes from "prop-types";

class Sidebar extends Component {
  render() {
    return (
      <aside
        className={
          this.props.isSidebarVisible
            ? "site-sidebar"
            : "site-sidebar is-hidden"
        }
      >
        <form action="#">
          <label htmlFor="filter-input" className="sr-only">
            Filter Places
          </label>
          <input
            type="text"
            placeholder="Filter Places"
            id="filter-input"
            onChange={this.props.filter}
          />
        </form>

        <ul className="places-list">
          {this.props.places.map((place, i) => (
            <li className="places-list__item" key={i}>
              {place.name}
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  filter: PropTypes.func,
  isSidebarVisible: PropTypes.bool,
  places: PropTypes.array
};

export default Sidebar;
