import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getVid} from '../../Actions/apis';
import VideoList from '../Vids/VideoList'

export default function ResourceDetail({toggleEdit, deleteResource, resource}) {
    const dispatch = useDispatch();
    const {resource_name, website, detail} = resource;
    let video = useSelector(st => st.externalApi.vids)
    let missingVideo = !video
    
    

   

    useEffect(function(){
      
        if(missingVideo){
          dispatch(getVid(resource_name))
        }
        dispatch(getVid(resource_name))
      }, [missingVideo, resource_name, dispatch])

      
      
    
    return (
        <div>
        <h3>{resource_name}</h3>
            <p>{website}</p>
            <p>{detail}</p>
            <i class="far fa-heart"></i>
            <div className="PostDisplay-right">
                 <div className="PostDisplay-edit-area">
            <i className="fas fa-edit text-primary"
                onClick={toggleEdit} />
            <i className="fas fa-times text-danger"
                onClick={deleteResource} />
          </div>
          </div>
          <VideoList video={video} />
        </div>
    )
}

