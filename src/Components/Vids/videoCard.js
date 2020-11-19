import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { SendLikeVid, SendUnLikeVid } from '../../Actions/apis';
import { externalApi } from '../../Reducers/api';




export default function VideoCard({video}) {
    const dispatch = useDispatch()
    let username = useSelector(st => st.user.user)
    let vId = useSelector(st => st.externalApi.likedVideo)
    let [like, setLike] = useState(false)
    const {id, snippet} = video

    function toggleLike(e) {
        e.preventDefault()
        setLike((like) => !like)
      }  
      
      function sendLike() {
        dispatch(SendLikeVid({
          username: username.username,
          youtube_url: snippet
        }))
      }

      function sendUnlike() {
          dispatch(SendUnLikeVid({
            id: vId.id
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

    
    return (
        <div>
        <iframe width="420" height="315"
        src={`https://www.youtube.com/embed/${id.videoId}`}>
        </iframe>
        <p>{like ? <i class="fas fa-heart" onClick={handleUnlike}></i>: <i class="far fa-heart" onClick={handleLike}></i>} </p>
        </div>
    )
}
