import React, { Component } from "react";
import "./App.css";
import GoogleMapReact from "google-map-react";
import MyGreatPlaceWithHover from "./mygreatplacehover";
import { K_SIZE } from "./my_great_place_with_hover_styles.js";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "red",
      padding: "5px 5px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10%",
      transform: "translate(-5%, -5%)"
    }}
  >
    {text}
  </div>
);

class App extends Component {
  static defaultProps = {
    center: {
      lat: 1.29027,
      lng: 103.851959
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAn5Nt8e_rYahYmraxZSc5quaS0h4RfNwI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          hoverDistance={K_SIZE / 2}
        >
          {/* <AnyReactComponent
            lat={1.28351}
            lng={103.846797}
            text={"ThoughtWorks SG"}
          /> */}
          <AnyReactComponent
            lat={1.284}
            lng={103.8609}
            text={"Marina Bay Sands"}
          />
          <MyGreatPlaceWithHover
            lat={1.28351}
            lng={103.846797}
            text={"A"} /* Kreyser Avrora */
          />
          <MyGreatPlaceWithHover
            {...this.props.greatPlaceCoords}
            text={"B"} /* road circle */
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;
