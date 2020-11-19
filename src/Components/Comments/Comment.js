import React, {useEffect} from 'react'
import styled from "styled-components";
import {useSelector} from 'react-redux'


export default function Comment({comment, deleteComment}) {

    const user = useSelector(st => st.user.user.username) 
    let canDelete = user === comment.username;
    function handleDelete(evt) {
        deleteComment(comment.id);
      }
    return (
        <div>
            <h3>{comment.username}</h3>
            <p>{deleteComment && canDelete && (
                <i
                  className="far fa-trash-alt"
                  onClick={handleDelete}
                />
              )}
              
            {comment.comment_text}</p>
        </div>
    )
}
