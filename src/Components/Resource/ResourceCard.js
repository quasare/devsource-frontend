import React from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {StyledDiv, StyledLink} from '../Misc/StyleResource'

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.txt_secondary};

  &:hover {
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.main};

  }
  padding: 0rem 1rem;
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
