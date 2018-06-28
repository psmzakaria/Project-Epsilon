import React, { Component } from "react";


import "./styles.css";

const Component1 = () => <Contact/>;
const Component2 = () => <Home/>;
const NavBar = props => (
  <div>
    <a onClick={() => props.loadComponent("component1")}>Load component 1</a>
    <a onClick={() => props.loadComponent("component2")}>Load component 2</a>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      componentToDisplay: null
    };
  }

  render() {
    return (
      <div className="Route">
        <NavBar loadComponent={this.loadComponent} />
        <h1>my awesome app</h1>

        {this.state.componentToDisplay === "component1" && <Component1 />}
        {this.state.componentToDisplay === "component2" && <Component2 />}
      </div>
    );
  }

  loadComponent = componentName => {
    this.setState({
      componentToDisplay: componentName
    });
  };
}

