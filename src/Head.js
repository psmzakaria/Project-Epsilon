import React from "react";
import "./App.css";
import { Navbar, MenuItem, NavItem, Nav, NavDropdown } from "react-bootstrap";
const Head = () => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand class="NavbarDef">
          <a href="#brand">E-Waste-Y-Waste</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Home
          </NavItem>
          <NavItem eventKey={2} href="#">
            About
          </NavItem>
          <NavDropdown eventKey={3} title="Recycle Now" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Recycleable E-Wastes</MenuItem>
            <MenuItem eventKey={3.2}>Drop-Off Locations</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Contact
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link Right
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  </div>
);

export default Head;
