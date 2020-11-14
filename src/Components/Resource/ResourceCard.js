import React from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom'

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`

const Container = styled.div``

export default function ResourceCard({resource}) {
    return (

        <Container>
        <Card>
            <h3>{resource.resource_name}</h3>
            <p>{resource.website}</p>
            <p>{resource.detail}</p>
            <Link to={`/languages/${resource.lang}/resource/${resource.id}`}> Detail  </Link>
        </Card>
        </Container>
    )
}
