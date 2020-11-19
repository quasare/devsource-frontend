import axios from 'axios';
import {LOAD_QUOTE, LOAD_GH, LOAD_VID, LOAD_JOKE, LIKE_VID, UNLIKE_VID } from "./types";


const BASE_URL = process.env.BASE_URL || "http://localhost:3001";


const getQuote = () => {
    return async function (dispatch) {
     
      const res = await axios.get(`${BASE_URL}/aux/quote`);
      dispatch(gotQuote(res.data));
    };
  }

  function gotQuote(quote) {
    return { type: LOAD_QUOTE, payload: quote };
  }

  const getJoke = () => {
    return async function (dispatch) {
     
      const res = await axios.get(`${BASE_URL}/aux/joke`);
      dispatch(gotJoke(res.data));
    };
  }

  function gotJoke(joke) {
    return { type: LOAD_JOKE, payload: joke };
  }
  
  const getGh = (lang) => {
    return async function (dispatch) {
     
      const res = await axios.get(`${BASE_URL}/aux/gh/${lang}`);
      dispatch(gotGh(res.data));
    };
  }  

  function gotGh(gh) {
    return { type: LOAD_GH, payload: gh };
  }

  const getVid = (lang) => {
    return async function (dispatch) {
     
      const res = await axios.get(`${BASE_URL}/aux/vid/${lang}`);
      dispatch(gotVid(res.data));
    };
  }  

  function gotVid(vid) {
    return { type: LOAD_VID, payload: vid };
  }

  export function SendLikeVid(data){
    return async function (dispatch) {
      const res = await axios.post(`${BASE_URL}/likes/video`, data)
      dispatch(LikeVid(res.data))
    }
  }

  function LikeVid(data) {
    return {type: LIKE_VID, payload: data}
  }

  export function SendUnLikeVid(data){
    return async function (dispatch) {
      const res = await axios.delete(`${BASE_URL}/likes/video`, data)
      dispatch(unLikeVid(res.data))
    }
  }

  function unLikeVid(data) {
    return {type: UNLIKE_VID}
  }

  export {getGh, getJoke, getVid, getQuote}