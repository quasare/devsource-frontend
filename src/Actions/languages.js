import { LOAD_LANGUAGE, LOAD_LANGUAGES } from "./types";
import axios from 'axios';


const BASE_URL = process.env.BASE_URL || "http://localhost:3001/lang";

const getLanguage = (id) => {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL}/${id}`);
    dispatch(gotLanguage(res.data));
  };
}


function gotLanguage(lang) {
  return { type: LOAD_LANGUAGE, payload: lang };
}

const getLanguages = () => {
  return async function (dispatch) {
   
    const res = await axios.get(`${BASE_URL}`);
    dispatch(gotLanguages(res.data));
  };
}


function gotLanguages(lang) {
  return { type: LOAD_LANGUAGES, payload: lang };
}


export { getLanguage, getLanguages }