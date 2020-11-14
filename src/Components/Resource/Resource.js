import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {getResource} from '../../Actions/resources'
import {postComment, removeCommentFromAPI} from '../../Actions/comments';
import {updateResourceInAPI, removeResourceFromAPI} from '../../Actions/resources';
import {useHistory} from 'react-router-dom'
import CommentList from '../Comments/CommentList';
import CommentForm from '../Comments/CommentForm';
import ResourceForm from './ResourceForm';
import ResourceDetail from './ResourceDetail';

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`

const Container = styled.div`
  padding: .2rem 33rem;
`

export default function Resource() {
    let {id} = useParams()
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory()
    let resource = useSelector(st => st.resource.resource)
    let missing = !resource


    useEffect(function() {
      if (missing) {
        dispatch(getResource(id));
      }
      dispatch(getResource(id));
    }, [missing,id, dispatch]);

    function toggleEdit() {
      setIsEditing(edit => !edit);
    }
  
    /** Handle post editing: adds to backend. */
  
    function edit({ resource_name, website, detail }) {
      dispatch(updateResourceInAPI(
        id,
        resource_name,
        website,
        detail  
      ));
  
      toggleEdit();
    }

    function deleteResource() {
      dispatch(removeResourceFromAPI(id));
      history.push("/");
    }

    function addComment(text) {
      dispatch(postComment( text));
    }

    function deleteComment(commentId) {
      dispatch(removeCommentFromAPI(commentId));
    }
    
    if (missing) return <h1 className="mt-5">loading...</h1>;

    return (
        <div>
        {isEditing
          ? <ResourceForm resource={resource} save={edit} cancel={toggleEdit} />
          : <ResourceDetail resource={resource}
                          toggleEdit={toggleEdit}
                          deleteResource={deleteResource} />}

            <CommentForm submitCommentForm={addComment} username='test1' post_id={id} />
            <CommentList name={id} deleteComment={deleteComment} />
        </div>
    )
}
