import React, {useEffect} from 'react'
import ResourceCard from './ResourceCard'
import { useSelector, useDispatch } from "react-redux";
import {getResources} from '../../Actions/resources'




export default function ResourceList({name}) {
    const dispatch = useDispatch();
    let resources = useSelector(st => st.resources.resources)
    let token = useSelector(st => st.user.token)

    let missing = !resources
    useEffect(function() {
        if (missing) {
          dispatch(getResources(name, {token: token}));
        }
        dispatch(getResources(name, {token: token}))
      }, [missing, name, dispatch]);

      if (missing) return <h1 className="mt-5">loading...</h1>;
    return (
        <div className="text-center">
        <h3>Reources</h3>
        {resources.map((r) => (<ResourceCard resource={r} />
            ))}
        </div>
    )
}
