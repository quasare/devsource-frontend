import { LOAD_COMMENT, REMOVE_COMMENT, POST_COMMENT } from "./types";
import axios from 'axios';


const BASE_URL = process.env.BASE_URL || "http://localhost:3001/comments";


const getComments = (lang, data) => {
    let isnum = /^\d+$/.test(lang);
    return async function (dispatch) {
      if(isnum){
        const res = await axios.get(`${BASE_URL}/resource/${lang}`, {params: data});
       dispatch(gotComment(res.data));
      }else{
        const res = await axios.get(`${BASE_URL}/language/${lang}`, {params: data});
        dispatch(gotComment(res.data));
      }
      
    };
  }

  function gotComment(resource) {
    return { type: LOAD_COMMENT, payload: resource };
  }

const postComment = (data) => {
      if(data.resource_id){
        return async function (dispatch){
          const res = await axios.post(`${BASE_URL}/resource`, data)
          dispatch(createComment(res.data));
        }
      }else{
        return async function (dispatch){
          const res = await axios.post(`${BASE_URL}/lang`, data)
          dispatch(createComment(res.data));
      }      
}  }

function createComment(comment) {
  return { type: POST_COMMENT, comment: comment };
}

function removeCommentFromAPI( commentId) {
  return async function (dispatch) {
    await axios.delete(`${BASE_URL}/${commentId}`);
    return dispatch(removeComment(commentId));
  };
}

function removeComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    commentId: commentId
  };
}

  export {getComments, postComment, removeCommentFromAPI}