import React, { Component } from "react";
import PropTypes from "prop-types";

class Sidebar extends Component {
  render() {
    return (
      <aside
        className={
          this.props.isSidebarVisible ? "app-sidebar" : "app-sidebar is-hidden"
        }
      >
        <form action="#">
          <label htmlFor="filter-input" className="sr-only">
            Filter Places
          </label>
          <input
            type="search"
            placeholder="Filter Places"
            id="filter-input"
            onChange={this.props.filter}
          />
        </form>

        <ul className="places-list" role="listbox">
          {this.props.places.map((place, i) => (
            <li
              className="places-list__item"
              role="option"
              aria-selected="false"
              tabIndex="0"
              key={i}
              onClick={this.props.handlePlaceClick}
              onKeyUp={e =>
                e.key === "Enter" ? this.props.handlePlaceClick(e) : ""
              }
            >
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
