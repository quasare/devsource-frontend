import React from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom';


const StyledDiv = styled.div` 
    background-color:${props => props.theme.main};
    border: ${props => props.theme.primary};
    color: ${props => props.theme.txt_secondary};
    width:100%;
    height:100%;
    border-radius: .5rem;
    justify-content: center;
    text-align: center;
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
const StyledLink = styled.a`
text-decoration: none;
  color: ${props => props.theme.txt_secondary};
`

export default function ResourceCard({resource}) {
    return (

        <div>
        <StyledDiv className="text-center">
            <h3>{resource.resource_name}</h3>
            <p> <StyledLink href={resource.website} > View Site </StyledLink> </p>
            <p>{resource.detail}</p>
            <StyledNavLink to={`/languages/${resource.lang}/resource/${resource.id}`}> Detail  </StyledNavLink>
        </StyledDiv>
        </div>
    )
}
