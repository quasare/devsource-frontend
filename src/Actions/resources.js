import { ADD_RESOURCE, LOAD_RESOURCE, LOAD_RESOURCES, UPDATE_RESOURCE, DELETE_RESOURCE, LIKE_RESOURCE, UNLIKE_RESOURCE } from "./types";
import axios from 'axios';


const BASE_URL = process.env.BASE_URL || "http://localhost:3001";


const getResource = (id, data) => {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL}/resources/detail/${id}`, {params: data});
    dispatch(gotResource(res.data));
  };
}


function gotResource(resource) {
  return { type: LOAD_RESOURCE, payload: resource };
}

const getResources = (lang, data) => {
  return async function (dispatch) {
   
    const res = await axios.get(`${BASE_URL}/resources/${lang}`, {params: data});
    dispatch(gotResources(res.data));
  };
}


function gotResources(lang) {
  return { type: LOAD_RESOURCES, payload: lang };
}

function sendResourceToAPI(lang, resource_name, website, detail) {
  return async function (dispatch) {
    const response = await axios.post(`${BASE_URL}/resources`, {
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
    const response = await axios.patch(`${BASE_URL}/resources/${id}`, {
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
    await axios.delete(`${BASE_URL}/resources/${id}`);
    return dispatch(removeResource(id));
  };
}

function removeResource(postId) {
  return {
    type: DELETE_RESOURCE,
    postId
  };
}

export function sendLikeResource(data) {
  return async function(dispatch) {
    let res = await axios.post(`${BASE_URL}/likes/resource`, data)
    return dispatch(likeResource(res.data))
  }
}

function likeResource(data){
  return {type: LIKE_RESOURCE, data}
}

export function sendUnlikeResource(data) {
  return async function(dispatch) {
    let res = await axios.delete(`${BASE_URL}/likes/resource`, {params: data} )
    return dispatch(unlikeResource(res.data))
  }
}

function unlikeResource(id){
  return {type: UNLIKE_RESOURCE}
}

export {  getResources, getResource, sendResourceToAPI, updateResourceInAPI, removeResourceFromAPI }