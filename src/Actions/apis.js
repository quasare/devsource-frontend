import axios from 'axios';
import {LOAD_QUOTE, LOAD_GH, LOAD_VID, LOAD_JOKE } from "./types";


const BASE_URL = process.env.BASE_URL || "http://localhost:3001/aux/";


const getQuote = () => {
    return async function (dispatch) {
     
      const res = await axios.get(`${BASE_URL}/quote`);
      dispatch(gotQuote(res.data));
    };
  }

  function gotQuote(quote) {
    return { type: LOAD_QUOTE, payload: quote };
  }

  const getJoke = () => {
    return async function (dispatch) {
     
      const res = await axios.get(`${BASE_URL}/joke`);
      dispatch(gotJoke(res.data));
    };
  }

  function gotJoke(joke) {
    return { type: LOAD_JOKE, payload: joke };
  }
  
  const getGh = (lang) => {
    return async function (dispatch) {
     
      const res = await axios.get(`${BASE_URL}/gh/${lang}`);
      dispatch(gotGh(res.data));
    };
  }  

  function gotGh(gh) {
    return { type: LOAD_GH, payload: gh };
  }

  const getVid = (lang) => {
    return async function (dispatch) {
     
      const res = await axios.get(`${BASE_URL}/vid/${lang}`);
      dispatch(gotVid(res.data));
    };
  }  

  function gotVid(vid) {
    return { type: LOAD_VID, payload: vid };
  }

  export {getGh, getJoke, getVid, getQuote}