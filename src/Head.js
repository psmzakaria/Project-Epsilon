import React from "react";
import "./App.css";
import {
  Navbar,
  MenuItem,
  NavItem,
  Nav,
  NavDropdown,
  Button
} from "react-bootstrap";
const Head = props => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header className="Can">
        <Navbar.Brand class="NavbarDef">
          <a href="#brand" onClick={() => props.loadComponent("component1")}>
            E-Waste-Y-Waste
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem onClick={() => props.loadComponent("component2")}eventKey={1} href="#">
            Home
          </NavItem>

          <NavDropdown eventKey={3} title="Recycle Now" id="basic-nav-dropdown">
            <MenuItem onClick={() => props.loadComponent("component3")}eventKey={3.1}>Recycleable E-Wastes</MenuItem>
            <MenuItem onClick={() => props.loadComponent("component4")} eventKey={3.2}>Drop-Off Locations</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem onClick={() => props.loadComponent("component5")} eventKey={1} href="#">
            Contact
          </NavItem>
          <Button onClick={() => props.loadComponent("component6")}bsStyle="danger">Get Recycling Points</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  </div>
);

export default Head;
