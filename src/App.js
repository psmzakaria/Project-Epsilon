import React, { Component } from "react";
import "./App.css";
import Head from "./Head";
import ControlledCarousel from "./ConCarousel"
import Contact from "./Contact";
import Home from "./Home";
import RecycleEwaste from "./Recycleable";
import GoogleMap from "./GoogleMap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      componentToDisplay: null
    };
  }

  loadComponent = componentName => {
    this.setState({
      componentToDisplay: componentName
    });
  };
  render() {
    return (
      <div className="Body">
        <Head loadComponent={this.loadComponent} />
        {this.state.componentToDisplay === "component1" && <Home />}
        {this.state.componentToDisplay === "component2" && <RecycleEwaste />}
        {this.state.componentToDisplay === "component3" && <RecycleEwaste />}
        {this.state.componentToDisplay === "component4" && <GoogleMap />}
        {this.state.componentToDisplay === "component5" && <Contact />}
        {this.state.componentToDisplay === "component6" && <GoogleMap />}
      </div>
    );
  }
}

export default App;
