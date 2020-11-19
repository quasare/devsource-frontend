import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {useSelector} from 'react-redux'
import {
    A,
    Button,
    Navbar,
    Container,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
  } from '@bootstrap-styled/v4';


const MainNavbar = styled(Navbar)`
  background-color: ${props => props.theme.main};
  color: white;
  box-shadow: 0px 3px 4px 1px rgba(143,158,164,0.34);
`
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`

export default function Navigation({logout}) {
  let user = useSelector(st => st.user.token)

 
  const [isOpen, setToggle] = useState(false);
 
      if(!user){
          return (
      <MainNavbar toggleable="lg">
        <Container>
        <Collapse navbar isOpen={true} >
          <Nav navbar className="mr-auto">
            <NavItem>
            <StyledNavLink><Link to="/">Home</Link></StyledNavLink>
            </NavItem>
            <NavItem>
            <StyledNavLink><Link to="/login">Log in / Sign Up</Link></StyledNavLink>
            </NavItem>
              </Nav>
          </Collapse>
            </Container>
        </MainNavbar>
          )
      }
    return (
        
        <MainNavbar toggleable="lg">
        <Container>
        <Collapse navbar isOpen={true} >
          <Nav navbar className="mr-auto">
            <NavItem>
            <StyledNavLink><Link to="/">Home</Link></StyledNavLink>
            </NavItem>
            <NavItem>
            <StyledNavLink><Link to="/profile">Profile</Link></StyledNavLink>
            </NavItem>
            <NavItem>
            <StyledNavLink><Link to="/languages">Languages</Link></StyledNavLink>
            </NavItem>
            <NavItem>
            <StyledNavLink><Link  to="/" onClick={logout}> Log out</Link></StyledNavLink>
            </NavItem>
              </Nav>
          </Collapse>
            </Container>
        </MainNavbar>
        
    )
}
