import React, { useState } from 'react';
import {useParams} from 'react-router-dom';

/** Show post form.
 *
 * Can be used for editing/adding --- it just calls the parent with edit
 * or cancel actions.
 *
 */

function ResourceForm({resource, save, cancel}) {

  let {lang} = useParams()

  const [postData, setPostData] = useState({
    resource_name: resource.resource_name,
    website: resource.website,
    detail: resource.detail,
    lang: lang
  });

  function handleChange(evt) {
    const {name, value} = evt.target;
    setPostData(data => ({
      ...data,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    save(postData);
  }

  return (
    <form className="mb-4" onSubmit={handleSubmit}>

      <div className="form-group">
      <label htmlFor="editform-resource_name">Name: </label>
      <input onChange={handleChange}
              id="editform-resource_name"
              name="resource_name"
              className="form-control"
              value={postData.resource_name} />
      </div>

      <div className="form-group">
      <label htmlFor="editform-website">Website:</label>
      <input onChange={handleChange}
              id="editform-website"
              name="website"
              className="form-control"
              value={postData.website} />
      </div>

      <div className="form-group">
      <label htmlFor="editform-detail">Detail:</label>
      <textarea onChange={handleChange}
                id="editform-detail"
                name="detail"
                className="form-control"
                rows={5}
                value={postData.detail} />
      </div>

      <button className="btn btn-primary mr-2">Save</button>
      <button onClick={cancel} className="btn btn-secondary">Cancel</button>
    </form>
  );
}

ResourceForm.defaultProps = {
  resource: { resource_name: "", website: "", detail: "" },
};

export default ResourceForm;