import React, {useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getJoke, getQuote} from './Actions/apis';
import JokeCard from './Components/Misc/JokeCard'

export default function Home() {
    let joke = useSelector(st => st.externalApi.joke)
    let quote = useSelector(st => st.externalApi.quote)
    const dispatch = useDispatch()
    
    let missing = !joke
    let missingQuote = !quote

    useEffect(function() {
      if (missing) {
        dispatch(getJoke());
      };
    }, [missing, dispatch]);

   

     
    if (missing) return <h1 className="mt-5">loading...</h1>;
    return (
        <div>
           <p>Devsource</p> 
           <JokeCard joke={joke} />
           <p>Site to help developers find resesources and tutorials</p>
        </div>
    )
}
