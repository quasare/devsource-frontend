import React, {useEffect} from 'react'
import ResourceCard from './ResourceCard'
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {getResources} from '../../Actions/resources'




export default function ResourceList({name}) {
    const dispatch = useDispatch();
    let resources = useSelector(st => st.resources.resources)
    let missing = !resources
    useEffect(function() {
        if (missing) {
          dispatch(getResources(name));
        }
        dispatch(getResources(name))
      }, [missing, name, dispatch]);

      if (missing) return <h1 className="mt-5">loading...</h1>;
    return (
        <div>
        <ul>
        {resources.map((r) => (<ResourceCard resource={r} />
            ))}</ul>
        </div>
    )
}
