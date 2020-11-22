import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from "styled-components";
import {useSelector} from 'react-redux'
import {
    Button,
    Navbar,
    Container,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem
  } from '@bootstrap-styled/v4';


const MainNavbar = styled(Navbar)`
  background-color: ${props => props.theme.main};
  margin-bottom: 2rem;
`
const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.txt_secondary};

  &:hover {
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.main};

  }
  padding: 0rem 1rem;
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
          
          <StyledNavLink to="/">Home</StyledNavLink>
            
          
          <StyledNavLink to="/login">Log in / Sign Up</StyledNavLink>
            
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
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/profile">Profile</StyledNavLink>
          <StyledNavLink to="/languages">Languages</StyledNavLink>
          <StyledNavLink  to="/" onClick={logout}> Log out</StyledNavLink>
              </Nav>
          </Collapse>
            </Container>
        </MainNavbar>
        
    )
}
