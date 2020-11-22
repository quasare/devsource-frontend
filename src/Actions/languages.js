import { LOAD_LANGUAGE, LOAD_LANGUAGES, LIKE_LANGUAGE, UNLIKE_LANGUAGE } from "./types";
import axios from 'axios';







const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

const getLanguage = (id, data) => {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL}/lang/${id}`, {params:data } );
    dispatch(gotLanguage(res.data));
  };
}


function gotLanguage(lang) {
  return { type: LOAD_LANGUAGE, payload: lang };
}

const getLanguages = (data) => {

  return async function (dispatch) {
   
    const res = await axios.get(`${BASE_URL}/lang`, {params:data }  );
    dispatch(gotLanguages(res.data));
  };
}


function gotLanguages(lang) {
  return { type: LOAD_LANGUAGES, payload: lang };
}


export function sendLikeLanguage(data) {
  return async function(dispatch) {
    let res = await axios.post(`${BASE_URL}/likes/lang`, data)
    return dispatch(likeLanguage(res.data))
  }
}

function likeLanguage(data){
  return {type: LIKE_LANGUAGE, data}
}

export function sendUnlikeLanguage(data) {
  return async function(dispatch) {
    let res = await axios.delete(`${BASE_URL}/likes/lang`, {params: data} )
    return dispatch(unlikeLanguage())
  }
}

function unlikeLanguage(id){
  return {type: UNLIKE_LANGUAGE}
}

export { getLanguage, getLanguages }