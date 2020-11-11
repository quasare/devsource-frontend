import React, {useEffect} from 'react'
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {getLanguage} from '../../Actions/languages';
import {postComment, removeCommentFromAPI} from '../../Actions/comments';
import {Link} from 'react-router-dom';
import {getVid} from '../../Actions/apis'
import ResourceList from '../Resource/ResourceList';
import CommentList from '../Comments/CommentList';
import CommentForm from '../Comments/CommentForm';
import VideoList from '../Vids/VideoList'


const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`

const Container = styled.div`
  padding: .2rem 33rem;

`

export default function Language() {
    let {name} = useParams()
    const dispatch = useDispatch();
    let lang = useSelector(st => st.language.lang)
    let video = useSelector(st => st.externalApi.vids)
    let missing = !lang
    let missingVideo = !video
    const history = useHistory();
    console.log(video);
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

    if (missing) return <h1 className="mt-5">loading...</h1>;


    function addComment(text) {
      dispatch(postComment( text));
    }

    function deleteComment(commentId) {
      dispatch(removeCommentFromAPI(commentId));
    }
  
  
    return (
        <div>
            <Container>
                <Card>
                    <h1>{lang.lang_name}</h1>
                    <p>{lang.docs}</p>
                    <Link to={`/add-resource/${name}`}>add resource</Link>
                </Card>
               
                <ResourceList name={name} />
                <VideoList video={video} />
                <CommentForm submitCommentForm={addComment} username='test1' post_id={lang.lang_name}/>
                <CommentList name={name} deleteComment={deleteComment} />
            </Container>
        </div>
    )
}
