import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getComments} from '../../Actions/comments';
import Comment from './Comment';
import { ListGroup, ListGroupItem, Collapse} from '@bootstrap-styled/v4';
import {Button} from '../Misc/StyleResource'


export default function CommentList({name, deleteComment}) {
    const dispatch = useDispatch();
    let comment = useSelector(st => st.comments.comments)
    let missing = !comment
    let token = useSelector(st => st.user.token)

    const [isOpen, setOpen] = useState(false)

    useEffect(function() {
        if (missing) {
          dispatch(getComments(name, {token: token}));
        }
        dispatch(getComments(name, {token: token}))
      }, [missing, name,token, dispatch]);

      if (missing) return <h1 className="mt-5">loading...</h1>;
    return (
        <div> 

        <h3>Comments</h3>
        <Button color="primary" className="mb-2" onClick={() => setOpen(!isOpen)}>Open </Button>
        <Collapse isOpen={isOpen}>
        
        <ListGroup>
        {comment.map((c) => (<ListGroupItem> <Comment comment={c} deleteComment={deleteComment} /> </ListGroupItem>
            ))}</ListGroup>
        </Collapse>
        </div>
    )
}
