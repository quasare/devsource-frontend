import React, { useState } from 'react';
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {StyledArea, Button, CommentFormDiv} from '../Misc/StyleResource'

/** Comment form
 *
 * Could be used for adding/editing: just shows form and tracks input.
 *
 */

const Commentchema = yup.object().shape({
	text: yup.string().required()
  });


function CommentForm({submitCommentForm, username, post_id
}) {
  const [text, setText] = useState();
  const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(Commentchema)
	  });

  let token = useSelector(st => st.user.token) 

  function onSubmit(evt) {
    

    let isnum = /^\d+$/.test(post_id);

    if(isnum){let data = {"token": token, "username": username, "resource_id": post_id, "comment_text": text}
    submitCommentForm(data);
    setText("");}

    else{
      
    let data = {"token": token, "username": username, "lang_name": post_id, "comment_text": text}
    submitCommentForm(data);
    setText("");}
    
  }

  function handleChange(evt) {
    setText(evt.target.value);
  }

  return (
    <CommentFormDiv>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
        <StyledArea onChange={handleChange}
                id="commentform-text"
                name="text"
                size="50"
                placeholder="New Comment"
                className="form-control"
                rows={3}
                value={text}
                ref={register}
                
                />
                {errors.text && <p>{errors.text.message}</p>}
        </div>
        <Button className="btn btn-primary">Add</Button>

      </form>

    </CommentFormDiv>
  );
}

export default CommentForm;
