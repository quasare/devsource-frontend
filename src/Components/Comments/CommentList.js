import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {getComments} from '../../Actions/comments';
import Comment from './Comment';
import { 
  ListGroup, 
  ListGroupItem, 
  Button, 
  Collapse
} from '@bootstrap-styled/v4';

export default function CommentList({name, deleteComment}) {
    const dispatch = useDispatch();
    let comment = useSelector(st => st.comments.comments)
    let missing = !comment

    const [isOpen, setOpen] = useState(false)

    useEffect(function() {
        if (missing) {
          dispatch(getComments(name));
        }
        dispatch(getComments(name))
      }, [missing, name, dispatch]);

      if (missing) return <h1 className="mt-5">loading...</h1>;
    return (
        <div> 

        <h3>Comments</h3>
        <Button color="primary" className="mb-2" onClick={() => setOpen(!isOpen)}>See </Button>
        <Collapse isOpen={isOpen}>
        
        <ListGroup>
        {comment.map((c) => (<ListGroupItem> <Comment comment={c} deleteComment={deleteComment} /> </ListGroupItem>
            ))}</ListGroup>
        </Collapse>
        </div>
    )
}
