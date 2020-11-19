import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {Container} from '@bootstrap-styled/v4'

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  justify-content: center;
`



export default function LanguageCard({language}) {
    return (
        <Container >
        <Card className="text-center">
            <h3>{language.lang_name}</h3>
            <p>{language.website}</p>
            <Link to={`/languages/${language.lang_name}`}> Detail  </Link>
        </Card>
        </Container>
    )
}
