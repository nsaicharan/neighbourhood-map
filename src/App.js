import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const key = "AIzaSyBPgrEBcYtfVq98DJDibH7jtoj8xjyXIRU";
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`;
    script.async = true;

    document.head.append(script);

    script.addEventListener("load", () => {
      this.initMap();
    });
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  };

  render() {
    return (
      <div className="App">
        <div id="map" />
      </div>
    );
  }
}

export default App;
