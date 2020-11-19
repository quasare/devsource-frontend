import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {getLanguage, sendLikeLanguage, sendUnlikeLanguage} from '../../Actions/languages';
import {postComment, removeCommentFromAPI} from '../../Actions/comments';
import {Link} from 'react-router-dom';
import {getVid} from '../../Actions/apis'
import ResourceList from '../Resource/ResourceList';
import CommentList from '../Comments/CommentList';
import CommentForm from '../Comments/CommentForm';
import VideoList from '../Vids/VideoList'
import {Container,  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter} from '@bootstrap-styled/v4'


const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`


export default function Language() {
    let {name} = useParams()
    const dispatch = useDispatch();
    let lang = useSelector(st => st.language.lang)
    let video = useSelector(st => st.externalApi.vids)
    let admin = useSelector(st => st.user.isAdmin)
    let username = useSelector(st => st.user.user)
    let [isModal, setModal] = useState(false)
    
    let missing = !lang
    let missingVideo = !video
    let [like, setLike] = useState(false)
    
    useEffect(function() {
      if (missing) {
        dispatch(getLanguage(name));
      }
      dispatch(getLanguage(name));
    }, [missing,name, dispatch]);

    useEffect(function(){
      if(missingVideo){
        dispatch(getVid(name))
      }
      dispatch(getVid(name))
    }, [missingVideo, name, dispatch])

    if (missing) return <h1 className="mt-5 text-center"><i class="fas fa-circle-notch fa-spin"></i></h1>;


    function addComment(text) {
      dispatch(postComment( text));
    }

    function deleteComment(commentId) {
      dispatch(removeCommentFromAPI(commentId));
    }
  
    function toggleLike(e) {
      e.preventDefault()
      setLike((like) => !like)
    }
  
    function sendLike() {
      dispatch(sendLikeLanguage({
        username: username.username,
        language_name: name
      }))
    }

    function sendUnlike() {
        dispatch(sendUnlikeLanguage({
          username: username.username,
          language_name: name
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
        <div>
            <Container >
                <Card className="text-center">
                    <h2>{lang.lang_name}  </h2>
                    <p>{lang.docs}  
                    {like ? <i class="fas fa-heart" onClick={handleUnlike}></i>: <i class="far fa-heart" onClick={handleLike}></i>} </p>
                    
                  {admin && <Link to={`/add-resource/${name}`}>add resource  
                  
                  </Link> }  
                 
                </Card>
                <div>
                <Button color="primary" onClick={() => handleClose()}>Videos</Button>
                <Modal isOpen={isModal} toggle={() => handleClose()}>
                  <ModalHeader>Videos</ModalHeader>
                  <VideoList video={video} />
                  <ModalFooter>
                    <Button color="secondary" onClick={() => handleClose()}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>               
              
                <ResourceList name={name} />
               
                <CommentForm submitCommentForm={addComment} username={username.username} post_id={lang.lang_name}/>
                <CommentList name={name} deleteComment={deleteComment} />
            </Container>
        </div>
    )
}
