import React, {useEffect} from 'react'
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {getResource} from '../../Actions/resources'
import CommentList from '../Comments/CommentList'

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`

const Container = styled.div`
  padding: .2rem 33rem;
`

export default function Resource() {
    let {id} = useParams()
    const dispatch = useDispatch();
    let resource = useSelector(st => st.resource.resource)
    let missing = !resource


    useEffect(function() {
      if (missing) {
        dispatch(getResource(id));
      }
      dispatch(getResource(id));
    }, [missing,id, dispatch]);
    return (
        <div>
            <h1>{resource.resource_name}</h1>
            <p>Hello</p>
            <CommentList name={id} />
        </div>
    )
}
