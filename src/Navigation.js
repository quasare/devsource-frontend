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


const StyledNav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  /* justify-content: space-between; */
`

const MainNavbar = styled(Navbar)`
  background: ${props => props.theme.main};
  color: white;
`

export default function Navigation({logout}) {
  let user = useSelector(st => st.user.token)

  const [text, setText] = useState();
   let initialState = {
        isOpen: false,
      };
      if(!user){
          return (
            <MainNavbar toggleable="lg">
        <Container>
        <Collapse navbar isOpen={true} >
          <Nav navbar className="mr-auto">
            <NavItem>
            <NavLink><Link to="/">Home</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="/proflie">Log in / Sign Up</Link></NavLink>
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
            <NavLink><Link to="/">Home</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="/proflie">Proflie</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="/languages">Languages</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link  to="/" onClick={logout}> Log out</Link></NavLink>
            </NavItem>
              </Nav>
          </Collapse>
            </Container>
        </MainNavbar>
        
    )
}
