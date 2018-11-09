import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Map from "./Map";
import placesInfo from "../placesInfo";

class App extends Component {
  state = {
    places: [],
    isSidebarVisible: true
  };

  componentDidMount() {
    this.setState({ places: placesInfo });
  }

  filterPlaces = e => {
    const query = e.target.value.toLowerCase().trim();

    this.setState({
      places: placesInfo.filter(place =>
        place.name.toLowerCase().includes(query)
      )
    });
  };

  toggleSidebar = e => {
    e.preventDefault();

    this.setState(state => ({
      isSidebarVisible: !state.isSidebarVisible
    }));
  };

  handlePlaceClick = e => {
    const placeslistItems = e.target.parentNode.children;
    console.log("placeslistItems", placeslistItems);

    // Set aria-selected as false for all places
    Array.from(placeslistItems).forEach(item =>
      item.setAttribute("aria-selected", false)
    );

    // Set aria-selected as true for the current clicked place
    e.target.setAttribute("aria-selected", true);

    // Activate related info window
    const placeName = e.target.innerText;
    this.mapComponent.triggerInfoWindow(placeName);
  };

  render() {
    return (
      <div className="app">
        <Header toggleSidebar={this.toggleSidebar} />

        <Sidebar
          places={this.state.places}
          isSidebarVisible={this.state.isSidebarVisible}
          filter={this.filterPlaces}
          handlePlaceClick={this.handlePlaceClick}
        />

        <Map
          ref={map => (this.mapComponent = map)}
          places={this.state.places}
        />
      </div>
    );
  }
}

export default App;
