import React, { Component } from "react";
import PropTypes from "prop-types";

class Map extends Component {
  state = {
    markers: []
  }

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

  componentDidUpdate() {
    const markers = [...this.state.markers];
    
    // Update the visibility of markers
    markers.forEach(marker => {
      if (this.props.places.some(place => place.name === marker.title)) {
        marker.setVisible(true);
      } else {
        marker.setVisible(false);
      }
    });
  }

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

    const infoWindow = new window.google.maps.InfoWindow();
    const bounds = new window.google.maps.LatLngBounds();

    this.props.places.forEach(place => {
      var marker = new window.google.maps.Marker({
        position: {
          lat: place.lat,
          lng: place.lng
        },
        map: map,
        title: place.name
      });

      marker.addListener("click", function() {
        infoWindow.open(map, marker);
        infoWindow.setContent(`<div>${place.name}</div>`);
      });

      this.setState(state => ({
        markers: [...state.markers, marker]
      }))

      bounds.extend({
        lat: place.lat,
        lng: place.lng
      });
    });

    map.fitBounds(bounds);
  };

  render() {
    return <main id="map" aria-label="map" role="application" />;
  }
}

Map.propTypes = {
  places: PropTypes.array
};

export default Map;
