import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {StyledDiv, LanguageCardDiv, StyledLink} from '../Misc/StyleResource'

 
const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.txt_secondary};

  &:hover {
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.main};

  }
  padding: 0rem 1rem;
`

export default function LanguageCard({language}) {
    return (
        <StyledDiv >
        <LanguageCardDiv  className="text-center">
            <h3>{language.lang_name}</h3>
            <p><StyledLink href={language.website}>Visit Site </StyledLink></p>
            <StyledNavLink to={`/languages/${language.lang_name}`}> View More </StyledNavLink>
        </LanguageCardDiv>
        </StyledDiv>
    )
}
