import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import {StyledDiv} from '../Misc/StyleResource'



export default function Comment({comment, deleteComment}) {

    const user = useSelector(st => st.user.user.username) 
    let canDelete = user === comment.username;
    function handleDelete(evt) {
        deleteComment(comment.id);
      }
    return (
        <StyledDiv>
            <h3>{comment.username}</h3>
            <p>{deleteComment && canDelete && (
                <i
                  className="far fa-trash-alt"
                  onClick={handleDelete}
                />
              )}
              
            {comment.comment_text}</p>
        </StyledDiv>
    )
}
