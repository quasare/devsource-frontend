import { LOAD_RESOURCE, LOAD_RESOURCES } from "./types";
import axios from 'axios';


const BASE_URL = process.env.BASE_URL || "http://localhost:3001/resources";

const getResource = (id) => {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL}/detail/${id}`);
    dispatch(gotResource(res.data));
  };
}


function gotResource(resource) {
  return { type: LOAD_RESOURCE, payload: resource };
}

const getResources = (lang) => {
  return async function (dispatch) {
   
    const res = await axios.get(`${BASE_URL}/${lang}`);
    dispatch(gotResources(res.data));
  };
}


function gotResources(lang) {
  return { type: LOAD_RESOURCES, payload: lang };
}


export {  getResources, getResource }