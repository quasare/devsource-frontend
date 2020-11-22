import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import LanguageCard from './LanguageCard'
import {getLanguages} from '../../Actions/languages'
import language from '../../Reducers/languages';
import {Container} from '@bootstrap-styled/v4'



export default function LanguageList() {
    const languages = useSelector(st => st.languages.lang)
    let token = useSelector(st => st.user.token)
    const dispatch = useDispatch()
    const missing = !languages
    useEffect(function() {
        if (missing) {
          dispatch(getLanguages({token: token}));
        }
      }, [missing, token, dispatch]);
      
      if (missing) return <Container><h1 className="mt-5 text-center"><i class="fas fa-circle-notch fa-spin"></i></h1></Container> ;
    return (
        <Container>
        <ul>
        {languages.map((l) => (<LanguageCard language={l} />
            ))}</ul>
        </Container>
    )
}


