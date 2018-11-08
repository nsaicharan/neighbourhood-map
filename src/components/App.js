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

  render() {
    return (
      <div className="app">
        <Header toggleSidebar={this.toggleSidebar} />

        <Sidebar
          places={this.state.places}
          isSidebarVisible={this.state.isSidebarVisible}
          filter={this.filterPlaces}
          openRelatedInfoWindow={this.openRelatedInfoWindow}
        />

        <Map places={this.state.places} />
      </div>
    );
  }
}

export default App;
