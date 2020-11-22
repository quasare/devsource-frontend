import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {Container} from '@bootstrap-styled/v4'

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  justify-content: center;
`

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


export default function LanguageCard({language}) {
    return (
        <StyledDiv >
        <Card className="text-center">
            <h3>{language.lang_name}</h3>
            <p><StyledLink href={language.website}>Visit Site </StyledLink></p>
            <StyledNavLink to={`/languages/${language.lang_name}`}> View More </StyledNavLink>
        </Card>
        </StyledDiv>
    )
}
