import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getUser, GetUserLikesLanguages, GetUserLikesVids, GetUserLikesResources} from '../../Actions/user';
import {Card, Container, Row, Col} from '@bootstrap-styled/v4'

import LikesList from './LikesList'


export default function Proflie() {
    const dispatch = useDispatch();
    let user = useSelector(st => st.user.user)
    let missing = !user
    let likesResource = useSelector(st => st.user.resources)
    let likedLanguage = useSelector(st => st.user.languages)
    let missingLikes = !likesResource
    
    useEffect(function() {
        if (missing) {
          dispatch(getUser());

        }
        dispatch(getUser())
      }, [missing, dispatch]);

    useEffect(() =>{
      if(missingLikes){
        dispatch(GetUserLikesLanguages(user.username))
        dispatch(GetUserLikesResources(user.username))
        dispatch(GetUserLikesVids(user.username))
      }
      dispatch(GetUserLikesLanguages(user.username))
        dispatch(GetUserLikesResources(user.username))
        dispatch(GetUserLikesVids(user.username))
    }, [missingLikes, dispatch])  


      if (missing) return <h1 className="fas fa-circle-notch fa-spin">loading...</h1>;
    return (
      <Container>
        <Card className="text-center">
            <p>Profile: {user.username}</p>
            <p>Name: {user.first_name} {user.last_name}  </p>
            <p>Email: {user.email}</p>
        </Card>

        <Row> 
          <Col lg={4} md={2}><LikesList likes={likesResource} /> </Col>
          <Col lg={4} md={2}> <LikesList likes={likedLanguage} /> </Col>
          <Col lg={14} md={2}> </Col>
        </Row>
        
        </Container>  
    )
}
