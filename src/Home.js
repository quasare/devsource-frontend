import React, {useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getJoke, getQuote} from './Actions/apis';
import JokeCard from './Components/Misc/JokeCard'

export default function Home() {
    let joke = useSelector(st => st.externalApi.joke)
    let quote = useSelector(st => st.externalApi.quote)
    const dispatch = useDispatch()
    
    let missing = !joke

    useEffect(function() {
      if (missing) {
        dispatch(getJoke());
      };
    }, [missing, dispatch]);

   

     
    if (missing) return <h1 className=" text-center"><i class="fas fa-circle-notch fa-spin"></i></h1>;
    return (
        <div className="text-center">
           <p>Devsource</p> 
           <JokeCard joke={joke} />
           <p>Site to help developers find resesources and tutorials</p>
        </div>
    )
}
