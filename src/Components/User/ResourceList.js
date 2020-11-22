import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.txt_secondary};

  &:hover {
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.main};

  }
  padding: 2rem 1rem;
  margin-top: 3rem
`

const StyledTable = styled.table`
background-color:${props => props.theme.main};
width: 50%;
height:100%;
margin-top: 1rem
  
`

export default function ResourceList({likes}) {
    if (!likes) return <h1 className="fas fa-circle-notch fa-spin"></h1>;
    let list = likes.map((l) => 
    <tr>
    <td> {l.resource_name}
    </td>
    </tr>)
return (
    <StyledTable>
    <thead>
    <tr>
            <th>
           Your Resources
           </th>
           </tr>
           <hr></hr>
    </thead>
    <tbody>
        {list}
    </tbody>
</StyledTable>
)
}
