import React from 'react'

export default function ResourceDetail({toggleEdit, deleteResource, resource}) {

    const {resource_name, website, detail} = resource;
    return (
        <div>
        <h3>{resource_name}</h3>
            <p>{website}</p>
            <p>{detail}</p>
            <div className="PostDisplay-right">
                 <div className="PostDisplay-edit-area">
            <i className="fas fa-edit text-primary"
                onClick={toggleEdit} />
            <i className="fas fa-times text-danger"
                onClick={deleteResource} />
          </div>
          </div>
        </div>
    )
}

