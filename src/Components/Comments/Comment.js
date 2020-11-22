import React, {useEffect} from 'react'
import styled from "styled-components";
import {useSelector} from 'react-redux'

const StyledDiv = styled.div` 
    background-color:${props => props.theme.main};
    border: ${props => props.theme.primary};
    color: ${props => props.theme.txt_secondary};
    width:100%;
    height:100%;
    border-radius: .5rem;
    justify-content: center;
    text-align: center;
    margin-top: .5rem;
`

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
