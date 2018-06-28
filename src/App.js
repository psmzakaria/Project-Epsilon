import React, { Component } from "react";
import "./App.css";
import Head from "./Head";
import Panel from "./Panel";
import Contact from "./Contact";
import Home from "./Home";
import RecycleEwaste from "./Recycleable";
import GoogleMap from "./GoogleMap"

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
        {this.state.componentToDisplay === "component1" && <GoogleMap />}
        {this.state.componentToDisplay === "component2" && <RecycleEwaste />}

        
      </div>
      // Important! Always set the container height explicitly
    );
  }
}

export default App;
