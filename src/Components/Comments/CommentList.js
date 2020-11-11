import React, {useEffect} from 'react'
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {getComments} from '../../Actions/comments';
import Comment from './Comment'

export default function CommentList({name, deleteComment}) {
    const dispatch = useDispatch();
    let comment = useSelector(st => st.comments.comments)
    let missing = !comment
    useEffect(function() {
        if (missing) {
          dispatch(getComments(name));
        }
        dispatch(getComments(name))
      }, [missing, name, dispatch]);

      if (missing) return <h1 className="mt-5">loading...</h1>;
    return (
        <div>
        <ul>
        {comment.map((c) => (<Comment comment={c} deleteComment={deleteComment} />
            ))}</ul>
        </div>
    )
}
