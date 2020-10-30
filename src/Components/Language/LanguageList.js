import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import LanguageCard from './LanguageCard'
import {getLanguages} from '../../Actions/languages'
import language from '../../Reducers/languages';



export default function LanguageList() {
    const languages = useSelector(st => st.languages.lang)
    const dispatch = useDispatch()
    const missing = !languages
    useEffect(function() {
        if (missing) {
          dispatch(getLanguages());
        }
      }, [missing, dispatch]);
      
      if (missing) return <h1 className="mt-5">loading...</h1>;
    return (
        <div>
        <ul>
        {languages.map((l) => (<LanguageCard language={l} />
            ))}</ul>
        </div>
    )
}


