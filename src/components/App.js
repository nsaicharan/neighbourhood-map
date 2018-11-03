import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Map from "./Map";
import places from "../places";

class App extends Component {
  state = {
    places: [],
    isSidebarVisible: true
  };

  componentDidMount() {
    this.setState({ places });
  }

  filterPlaces = e => {
    console.log(e.target.value);
  };

  toggleSidebar = e => {
    e.preventDefault();

    this.setState(state => {
      return { isSidebarVisible: !state.isSidebarVisible };
    });
  };

  render() {
    return (
      <div className="app">
        <Header toggleSidebar={this.toggleSidebar} />

        <Sidebar
          places={this.state.places}
          isSidebarVisible={this.state.isSidebarVisible}
          filter={this.filterPlaces}
        />

        <Map places={this.state.places} />
      </div>
    );
  }
}

export default App;
