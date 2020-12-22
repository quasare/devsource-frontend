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
import VideoList from '../Vids/VideoList';
import Container from '@bootstrap-styled/v4/lib/Container';
import Modal from '@bootstrap-styled/v4/lib/Modal';
import ModalFooter from '@bootstrap-styled/v4/lib/Modal/ModalFooter';
import ModalHeader from '@bootstrap-styled/v4/lib/Modal/ModalHeader';
import BootstrapProvider from '@bootstrap-styled/provider';
import {StyledDiv, Button, StyledLink} from '../Misc/StyleResource'


const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.txt_secondary};

  &:hover {
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.main};

  }
  padding: 0rem 1rem;
`


export default function Language() {
    let {name} = useParams()
    const dispatch = useDispatch();
    let lang = useSelector(st => st.language.lang)
    let video = useSelector(st => st.externalApi.vids)
    let admin = useSelector(st => st.user.isAdmin)
    let username = useSelector(st => st.user.user)
    let token = useSelector(st => st.user.token)
    let userLike = useSelector(st => st.user.languages)
    let [isModal, setModal] = useState(false)
    
    let missing = !lang
    let missingVideo = !video
    let [like, setLike] = useState(false)
    let isUser = userLike  ? userLike.filter(e => e.language_name == name) : false 
    
    let isLike = isUser.length >= 1

    useEffect(()=> {
      if(isLike){
        setLike(() => like = true)
      }else{
        setLike(() => like = false)
      }
    },[isLike])
    
    useEffect(function() {
      if (missing) {
        dispatch(getLanguage(name, {token: token}));
      }
      dispatch(getLanguage(name, {token: token}));
    }, [missing, name, token, dispatch]);

    useEffect(function(){
      if(missingVideo){
        dispatch(getVid(name))
      }
      dispatch(getVid(name))
    }, [missingVideo, name, dispatch])

    if (missing) return <Container><h1 className="mt-5 text-center"><i class="fas fa-circle-notch fa-spin"></i></h1></Container>;


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
        token: token,
        username: username.username,
        language_name: name
      }))
    }

    function sendUnlike() {
        dispatch(sendUnlikeLanguage({
          token: token,
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

    const handleClose = () => setModal((isModal) => !isModal)

    console.log(isModal);

    return (
        <div>
            <Container >
                <StyledDiv className="text-center">
                    <h2>{lang.lang_name}  </h2>
                    <p> <StyledLink  href={lang.docs}> View Docs</StyledLink>  
                    <p>
                    {like ? <i class="fas fa-heart" onClick={handleUnlike}></i>: <i class="far fa-heart" onClick={handleLike}></i>} </p>
                    </p>
                  {admin && <StyledNavLink to={`/add-resource/${name}`}>add resource  
                  
                  </StyledNavLink> }  
                 
                </StyledDiv>
                
                <Button color="primary" onClick={() => handleClose()}>Videos</Button>
                <BootstrapProvider >
                <Modal isOpen={isModal} toggle={() => handleClose()}>
                  <ModalHeader toggle={() => handleClose()}   >Videos</ModalHeader>
                  <VideoList video={video} />
                  <ModalFooter>
                    <Button color="secondary" onClick={() => handleClose()}>Close</Button>
                    </ModalFooter>
                </Modal>
                </BootstrapProvider>           
              <ResourceList name={name} />
               
              <CommentForm submitCommentForm={addComment} username={username.username} post_id={lang.lang_name}/>
              <CommentList name={name} deleteComment={deleteComment} />
              
            </Container>
        </div>
    )
}
