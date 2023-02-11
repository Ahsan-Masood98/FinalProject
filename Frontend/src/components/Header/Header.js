import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar {...args} container="fluid" expand="lg" className="shadow mb-3">
      <NavbarBrand>
        <NavLink to="/home" className="nav-link">
          Games4U
        </NavLink>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink to="/home" className="nav-link">
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/popular" className="nav-link">
              POPULAR
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/latest" className="nav-link">
              LATEST
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/upcomming" className="nav-link">
              UPCOMMING
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/wishlist" className="nav-link">
              WISHLIST
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
