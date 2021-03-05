import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

import './NavBarComponent.scss'

import logo from '../../assets/images/logo.png'

const NavBarComponent = (props) => {

  return (
      <Navbar dark expand="md" fixed="top">
        <div className="container-fluid nav-container nav-top-container pt-5">
            <NavbarBrand href="/"><img className="nav-img mr-auto" src={logo} alt=""/></NavbarBrand>
            <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink className="black pr-5" href="/components/">Courses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="black pr-5" href="https://github.com/reactstrap/reactstrap">Erzy For Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="white" href="/components/">Teach on Ezry </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="white" href="/components/">About Us</NavLink>
            </NavItem>
           
          </Nav>
            <Button color="primary">Signup</Button>{' '}
        </div>
       
      </Navbar>
  );
}

export default NavBarComponent;