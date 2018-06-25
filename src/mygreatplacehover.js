import React, { Component } from "react";

import {
  greatPlaceStyle,
  greatPlaceStyleHover
} from "./my_great_place_with_hover_styles.js";

class MyGreatPlaceWithHover extends Component {
  static defaultProps = {};

  render() {
    const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;

    return <div style={style}>{this.props.text}</div>;
  }
}
export default MyGreatPlaceWithHover;
