import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`

export default function Navbar() {
    return (
        <nav>
            <div>Navbar</div>
            <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/Proflie">Proflie</NavLink></li>
            <li> <NavLink to="/Languages">Language</NavLink></li>
            </ul>
        </nav>
    )
}
