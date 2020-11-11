import React, { useState } from 'react';

/** Comment form
 *
 * Could be used for adding/editing: just shows form and tracks input.
 *
 */

function CommentForm({submitCommentForm, username='test1', post_id
}) {
  const [text, setText] = useState();

  function handleSubmit(evt) {
    evt.preventDefault();

    let isnum = /^\d+$/.test(post_id);
    console.log(isnum);

    if(isnum){let data = {"username": username, "resource_id": post_id, "comment_text": text}
    submitCommentForm(data);
    setText("");}

    else{
      
    let data = {"username": username, "lang_name": post_id, "comment_text": text}
    submitCommentForm(data);
    setText("");}
    
  }

  function handleChange(evt) {
    setText(evt.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <textarea onChange={handleChange}
                id="commentform-text"
                name="text"
                size="50"
                placeholder="New Comment"
                className="form-control"
                rows={3}
                value={text} />
        </div>
        <button className="btn btn-primary">Add</button>

      </form>

    </div>
  );
}

export default CommentForm;
