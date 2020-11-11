import { ADD_RESOURCE, LOAD_RESOURCE, LOAD_RESOURCES, UPDATE_RESOURCE, DELETE_RESOURCE } from "./types";
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

function sendResourceToAPI(lang, resource_name, website, detail) {
  return async function (dispatch) {
    const response = await axios.post(`${BASE_URL}`, {
      lang,
      resource_name,
      website, 
      detail
    });
    return dispatch(addResource(response.data));
  };
}

function addResource(resource) {
  return {
    type: ADD_RESOURCE,
    resource
  };
}


 function updateResourceInAPI(id, resource_name, website, detail) {
  return async function (dispatch) {
    const response = await axios.patch(`${BASE_URL}/${id}`, {
      id,
      resource_name,
      website, 
      detail
    });
    return dispatch(updateResource(response.data));
  };
}

function updateResource(post) {
  return {
    type: UPDATE_RESOURCE,
    post,
  };
}

function removeResourceFromAPI(id) {
  return async function (dispatch) {
    await axios.delete(`${BASE_URL}/${id}`);
    return dispatch(removeResource(id));
  };
}

function removeResource(postId) {
  return {
    type: DELETE_RESOURCE,
    postId
  };
}
export {  getResources, getResource, sendResourceToAPI, updateResourceInAPI, removeResourceFromAPI }