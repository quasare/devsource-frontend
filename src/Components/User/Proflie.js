import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getUser, GetUserLikesLanguages, GetUserLikesVids, GetUserLikesResources} from '../../Actions/user';
import {Card, Container, Row, Col} from '@bootstrap-styled/v4'


import LanguageList from './LanguageList'
import ResourceList from './ResourceList'
import UserDetail from './UserDetail'


export default function Proflie() {
    const dispatch = useDispatch();
    let user = useSelector(st => st.user.user)
    let missing = !user
    let likesResource = useSelector(st => st.user.resources)
    let likedLanguage = useSelector(st => st.user.languages)
    let token = useSelector(st => st.user.token)
    let missingLikes = !likesResource
    
    useEffect(() =>{
      if(!missingLikes ){
        dispatch(GetUserLikesLanguages(user.username, {token: token}))
        dispatch(GetUserLikesResources(user.username, {token: token}))
        dispatch(GetUserLikesVids(user.username, {token: token}))
      }
      
    }, [missingLikes,  dispatch])  


      if (missing) return <h1 className="fas fa-circle-notch fa-spin"></h1>;
    return (
      <Container>
        <Row className='text-center'>
          <UserDetail user={user} />
        </Row>

        <Row> 
          <Col lg={4} md={2}> <ResourceList likes={likesResource} /> </Col>
          <Col lg={4} md={2}> <LanguageList likes={likedLanguage} /> </Col>
        </Row>
        
        </Container>  
    )
}
