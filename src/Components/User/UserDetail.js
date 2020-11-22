import React from 'react'
import styled from 'styled-components';

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

export default function UserDetail({user}) {
    return (
        <StyledDiv >
            <p>Username: {user.username}</p>
            <p>Name: {user.first_name} {user.last_name}  </p>
            <p>Email: {user.email}</p>
        </StyledDiv>
    )
}
