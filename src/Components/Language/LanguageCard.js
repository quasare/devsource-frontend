import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`

const Container = styled.div`
  padding: .2rem 33rem;

`

export default function LanguageCard({language}) {
    return (
        <Container>
        <Card>
            <h3>{language.name}</h3>
            <p>{language.detail}</p>
        </Card>
        </Container>
    )
}
