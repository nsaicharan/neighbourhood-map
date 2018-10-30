import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.scss";

class App extends Component {
  state = {
    places: [
      {
        name: "Hussain Sagar",
        lat: 17.42388,
        lng: 78.473824
      },
      {
        name: "Snow World",
        lat: 17.4145708,
        lng: 78.48092249999999
      },
      {
        name: "Paradise Restaurant",
        lat: 17.4417195,
        lng: 78.4872914
      },
      {
        name: "Birla Temple",
        lat: 17.4033,
        lng: 78.4707
      },
      {
        name: "Jalavihar Water Park",
        lat: 17.4326,
        lng: 78.4648
      },
      {
        name: "Clock Tower",
        lat: 17.4409513,
        lng: 78.4985573
      }
    ],
    isSidebarVisible: true
  };

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

  toggleSidebar = e => {
    e.preventDefault();

    this.setState(state => {
      return { isSidebarVisible: !state.isSidebarVisible };
    });
  };

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 17.43993, lng: 78.498276 },
      zoom: 20,
      mapTypeControlOptions: {
        position: window.google.maps.ControlPosition.TOP_RIGHT
      },
      fullscreenControlOptions: {
        position: window.google.maps.ControlPosition.BOTTOM_RIGHT
      },
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.TOP_LEFT
      }
    });

    var infowindow = new window.google.maps.InfoWindow();
    var bounds = new window.google.maps.LatLngBounds();

    this.state.places.forEach(place => {
      var marker = new window.google.maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        map: map,
        title: place.name
      });

      marker.addListener("click", function() {
        infowindow.open(map, marker);
        infowindow.setContent(`<div>${place.name}</div>`);
      });

      bounds.extend({ lat: place.lat, lng: place.lng });
    });

    map.fitBounds(bounds);
  };

  render() {
    return (
      <div className="app">
        <Header toggleSidebar={this.toggleSidebar} />
        <Sidebar
          places={this.state.places}
          isSidebarVisible={this.state.isSidebarVisible}
        />
        <div id="map" />
      </div>
    );
  }
}

export default App;
