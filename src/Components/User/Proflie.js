import React, {useEffect} from 'react'
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {getUser} from '../../Actions/user'

export default function Proflie() {
    const dispatch = useDispatch();
    let user = useSelector(st => st.user.user)
    let missing = !user
    useEffect(function() {
        if (missing) {
          dispatch(getUser());
        }
        dispatch(getUser())
      }, [missing, dispatch]);

      if (missing) return <h1 className="mt-5">loading...</h1>;
    return (
        <div>
            <p>Profile: {user.username}</p>
            <p>Name: {user.first_name} {user.last_name}  </p>
            <p>Email: {user.email}</p>
        </div>
    )
}
