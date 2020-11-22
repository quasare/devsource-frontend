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
import {Container} from '@bootstrap-styled/v4'





export default function Resource() {
    let {id} = useParams()
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory()
    let resource = useSelector(st => st.resource.resource)
    let username = useSelector(st => st.user.user)
    let token = useSelector(st => st.user.token)
    
    let missing = !resource


    useEffect(function() {
      if (missing) {
        dispatch(getResource(id, {token: token}));
      }
      dispatch(getResource(id, {token: token}));
    }, [missing,id, token, dispatch]);

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
    
    

    if (missing) return <h1 className="mt-5 text-center"><i class="fas fa-circle-notch fa-spin"></i></h1>;

    return (
        <Container>
        {isEditing
          ? <ResourceForm resource={resource} save={edit} cancel={toggleEdit} />
          : <ResourceDetail resource={resource}
                          toggleEdit={toggleEdit}
                          deleteResource={deleteResource} />}

            <CommentForm submitCommentForm={addComment} username={username.username} post_id={id} />
            <CommentList name={id} deleteComment={deleteComment} />
        </Container>
    )
}
