import Container from '@bootstrap-styled/v4/lib/Container';
import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";





const ResourceSchema = yup.object().shape({
  resource_name: yup.string().required(),
    website: yup.string().required().url(),
    detail: yup.string().required().min(20),
  });

 

const StyledDiv = styled.div` 
background-color:${props => props.theme.main};
border: ${props => props.theme.primary};
color: ${props => props.theme.txt_secondary};
width:100%;
height:100%;
border-radius: .5rem;
justify-content: center;
text-align: center;
`  
const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;

/* Color the border and text with theme.main */
color: ${props => props.theme.txt_secondary};
background: ${props => props.theme.main};
`;

function ResourceForm({resource, save, cancel}) {
  const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(ResourceSchema)
	  });

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

  function onSubmit(evt) {
    evt.preventDefault();
    save(postData);
  }

  return (
    <Container>
    <StyledDiv>
    <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>

      <div className="form-group">
      <label htmlFor="editform-resource_name">Name: </label>
      <input onChange={handleChange}
              id="editform-resource_name"
              name="resource_name"
              className="form-control"
              value={postData.resource_name} 
              ref={register}
              />
              {errors.resource_name && <p>{errors.resource_name.message}</p>}        
      </div>

      <div className="form-group">
      <label htmlFor="editform-website">Website:</label>
      <input onChange={handleChange}
              id="editform-website"
              name="website"
              className="form-control"
              value={postData.website}
              ref={register}
              />
              {errors.website && <p>{errors.website.message}</p>}
      </div>

      <div className="form-group">
      <label htmlFor="editform-detail">Detail:</label>
      <textarea onChange={handleChange}
                id="editform-detail"
                name="detail"
                className="form-control"
                rows={5}
                value={postData.detail}
                ref={register}
                />
                {errors.detail && <p>{errors.detail.message}</p>}
      </div>

      <Button className="btn btn-primary mr-2">Save</Button>
      <Button onClick={cancel} className="btn btn-secondary">Cancel</Button>
    </form>
    </StyledDiv>
    </Container>
  );
}

ResourceForm.defaultProps = {
  resource: { resource_name: "", website: "", detail: "" },
};

export default ResourceForm;