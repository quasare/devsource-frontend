import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  /* justify-content: space-between; */
`

export default function Navbar() {
    return (
        <Nav>
            <div>Navbar</div>
            <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/proflie">Proflie</NavLink></li>
            <li> <NavLink to="/languages">Languages</NavLink></li>
            </ul>
        </Nav>
    )
}
