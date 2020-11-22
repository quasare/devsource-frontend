import React, {useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getJoke, getQuote} from './Actions/apis';
import JokeCard from './Components/Misc/JokeCard'
import Container from '@bootstrap-styled/v4/lib/Container';
import styled from 'styled-components'


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

export default function Home() {
    let joke = useSelector(st => st.externalApi.joke)

    const dispatch = useDispatch()
    
    let missing = !joke

    useEffect(function() {
      if (missing) {
        dispatch(getJoke());
      };
    }, [missing, dispatch]);

   

     
    if (missing) return <Container >
    <StyledDiv>
    <p>Devsource</p> 
    <h1 className=" text-center"><i class="fas fa-circle-notch fa-spin"></i></h1>
    <p>Site to help developers find resesources and tutorials</p>
    </StyledDiv>
    </Container>;
    return (
        <Container >
          <StyledDiv>
           <p>Devsource</p> 
           <JokeCard joke={joke} />
           <p>Site to help developers find resesources and tutorials</p>
           </StyledDiv>
        </Container>
    )
}


