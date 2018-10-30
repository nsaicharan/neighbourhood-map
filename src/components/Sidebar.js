import React from "react";

export default function Sidebar(props) {
  return (
    <aside className="site-sidebar">
      <form action="#">
        <label htmlFor="filter-input" className="sr-only">
          Filter Places
        </label>
        <input type="text" placeholder="Filter Places" id="filter-input" />
      </form>

      <ul className="places-list">
        {props.places.map((place, i) => (
          <li className="places-list__item" key={i}>
            {place.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
