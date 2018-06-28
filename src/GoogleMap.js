import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import { K_SIZE } from "./my_great_place_with_hover_styles.js";
import LinkFunction from "./LinkFunction";
import LinkFunction2 from "./LinkFunction2";

const locations = [
  {
    text: "Nee Soon East CC",
    coordinates: "103.838488085342",
    lat: "1.43102086669869,0.0"
  },
  {
    text: "Eightrium@Changi business park",
    coordinates: "103.96446974864",
    lat: "1.3378750719199,0.0"
  },
  {
    text: "Environment Building (MEWR/NEA)",
    coordinates: "103.836104057868",
    lat: "1.31056745981661,0.0"
  },

  {
    text: "Eunos Primary School",
    coordinates: "103.904374791381",
    lat: "1.32438836308906,0.0"
  },

  {
    text: "Expedia Singapore Pte Ltd",
    coordinates: "103.854068348619",
    lat: "1.29509741694824,0.0"
  },
  {
    text: "Faber Crest Condominium",
    coordinates: "103.757074767054",
    lat: "1.32339071639709,0.0"
  },
  {
    text: "Fairfield Methodist Secondary School",
    coordinates: "103.78409964802",
    lat: "1.30163375037438,0.0"
  },
  {
    text: "Fernvale Gardens School",
    coordinates: "103.874903926607",
    lat: "1.38936625399677,0.0"
  },
  {
    text: "Fisher Clinical Services (Thermofisher Scientific)",
    coordinates: "103.748074842117",
    lat: "1.33225990235709"
  },
  {
    text: "Fuchun CC",
    coordinates: "103.774811861357",
    lat: "1.42952981467428"
  }
];
class GoogleMap extends Component {
  constructor() {
    super();
    this.state = {
      buildings: []
    };
  }
  static defaultProps = {
    center: {
      lat: 1.366,
      lng: 103.851959
    },
    zoom: 12
  };

  render() {
    return (
      <div className="Body">
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAn5Nt8e_rYahYmraxZSc5quaS0h4RfNwI"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            hoverDistance={K_SIZE / 2}
          >
            {locations.map(building => {
              return (
                <LinkFunction
                  lat={building.lat.split(",")[0]}
                  lng={building.coordinates}
                />
              );
            })}
            {locations.map(building => {
              return (
                <LinkFunction2
                  lat={building.lat.split(",")[0]}
                  lng={building.coordinates}
                  text={building.text}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default GoogleMap;
