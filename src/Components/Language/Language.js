import React, {useEffect} from 'react'
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {getLanguage} from '../../Actions/languages'


const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`

const Container = styled.div`
  padding: .2rem 33rem;

`

export default function Language() {
    let {name} = useParams()
    const dispatch = useDispatch();
    let lang = useSelector(st => st.language.lang)
    let missing = !lang
    // Call film data from API
    useEffect(function() {
      if (missing) {
        dispatch(getLanguage(name));
      }
    }, [missing, dispatch]);

    if (missing) return <h1 className="mt-5">loading...</h1>;

  
    return (
        <div>
            <Container>
                <Card>
                    <h1>{lang.lang_name}</h1>
                    <p>{lang.docs}</p>
                </Card>
            </Container>
        </div>
    )
}
