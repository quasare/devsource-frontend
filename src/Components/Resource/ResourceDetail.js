import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getVid} from '../../Actions/apis';
import VideoList from '../Vids/VideoList';
import {sendLikeResource, sendUnlikeResource} from '../../Actions/resources';
import {Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter} from '@bootstrap-styled/v4'
import BootstrapProvider from '@bootstrap-styled/provider';  
import {StyledDiv, Button, StyledLink} from '../Misc/StyleResource'

export default function ResourceDetail({toggleEdit, deleteResource, resource}) {
    const dispatch = useDispatch();
    const {resource_name, website, detail} = resource;
    let video = useSelector(st => st.externalApi.vids)
    let missingVideo = !video
    let isAdmin = useSelector(st => st.user.isAdmin)
    let username = useSelector(st => st.user.user.username)
    let [isModal, setModal] = useState(false)
    let userLike = useSelector(st => st.user.resources)
    let token = useSelector(st => st.user.token)


    let [like, setLike] = useState(false)
    let isUser = userLike  ? userLike.filter(e => e.resource_name == resource_name) : false 
    
    let isLike = isUser.length >= 1

    useEffect(()=> {
      if(isLike){
        setLike(() => like = true)
      }else{
        setLike(() => like = false)
      }
    },[isLike])
    

    useEffect(function(){
      
        if(missingVideo){
          dispatch(getVid(resource_name))
        }
        dispatch(getVid(resource_name))
      }, [missingVideo, resource_name, dispatch])

      function toggleLike(e) {
        e.preventDefault()
        setLike((like) => !like)
      }  
      
      function sendLike() {
        dispatch(sendLikeResource({
          token: token,
          username: username,
          resource_id: resource.id,
          rating: 0
        }))
      }

      function sendUnlike() {
          dispatch(sendUnlikeResource({
            token: token,
            username: username,
            resource_id: resource.id
          }))
      }
      
    function handleLike (e){
      sendLike(e) 
      toggleLike(e)
    }

    function handleUnlike (e){
      sendUnlike(e)
      toggleLike(e)
    }

    const handleClose = () => setModal(() => !isModal)
    
    return (
        <StyledDiv className="text-center">

        <h3>{resource_name}</h3>
            <p> <a herf={website}>View Site</a>  </p>
            <p>{detail}</p>
            <p>{like ? <i class="fas fa-heart" onClick={handleUnlike}></i>: <i class="far fa-heart" onClick={handleLike}></i>} </p>

            <div className="PostDisplay-right">
                 <div className="PostDisplay-edit-area">

            {isAdmin && <p><i className="fas fa-edit text-primary"
            onClick={toggleEdit} />
        <i className="fas fa-times text-danger"
            onClick={deleteResource} /></p>}     
            
          </div>
          </div>
          <div>
                <Button color="primary" onClick={() => handleClose()}>Videos</Button>
                <BootstrapProvider>
                <Modal isOpen={isModal} toggle={() => handleClose()}>
                  <ModalHeader>Videos</ModalHeader>
                  <VideoList video={video} />
                  <ModalFooter>
                    <Button color="secondary" onClick={() => handleClose()}>Cancel</Button>
                  </ModalFooter>
                </Modal>
                </BootstrapProvider>
            </div> 
        </StyledDiv>
    )
}

