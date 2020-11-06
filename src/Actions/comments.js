import { LOAD_COMMENT } from "./types";
import axios from 'axios';


const BASE_URL = process.env.BASE_URL || "http://localhost:3001/comments";


const getComments = (lang) => {
    let isnum = /^\d+$/.test(lang);
    return async function (dispatch) {
      if(isnum){
        const res = await axios.get(`${BASE_URL}/resource/${lang}`);
       dispatch(gotComment(res.data));
      }else{
        const res = await axios.get(`${BASE_URL}/language/${lang}`);
        dispatch(gotComment(res.data));
      }
      
    };
  }

  function gotComment(resource) {
    return { type: LOAD_COMMENT, payload: resource };
  }

  export {getComments}