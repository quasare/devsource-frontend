import React, {useEffect} from 'react'
import styled from "styled-components";


export default function Comment({comment, deleteComment}) {
    function handleDelete(evt) {
        deleteComment(comment.id);
      }
    return (
        <div>
            <h3>{comment.username}</h3>
            <p>{deleteComment && (
                <i
                  className="far fa-trash-alt"
                  onClick={handleDelete}
                />
              )}
              
            {comment.comment_text}</p>
        </div>
    )
}
