import { LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, 
  LOAD_USER_LANGUAGES, LOAD_USER_RESOURCES, LOAD_USER_VIDS } from "./types";
import axios from 'axios';



const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

const LoginUser = (user) => {
  
  return async (dispatch) => {
    let res = await axios.post(`${BASE_URL}/login`, user)
    dispatch(loginUser(res.data))
    
  }
  
}

const loginUser = (user) => {
  return {type: LOGIN_USER, payload: user}
}

const getUser = (username, isAdmin=false) => {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL}/users/${username}`);
    res.data.isAdmin =isAdmin
    dispatch(gotUser(res.data));
  };
}

function gotUser(user) {
    return { type: LOAD_USER, payload: user };
  } 
  

const logout = () => {
    return {type: LOGOUT_USER }
}


const RegisternUser = (user) => {
  
  return async (dispatch) => {
    let res = await axios.post(`${BASE_URL}/users/register`, user)
    dispatch(registeredUser(res.data))
    
  }
  
}
const registeredUser = (user) => {
  return {type: REGISTER_USER, payload: user}
}

export const GetUserLikesVids = (user) => {
  return async (dispatch) => {
    let res = await axios.get(`${BASE_URL}/users/${user}/videos`)
    dispatch(gotUserVids(res.data))
  }
}

const gotUserVids = (vids) => {
  return {type: LOAD_USER_VIDS, payload: vids}
}
export const GetUserLikesLanguages = (user) => {
  return async (dispatch) => {
    let res = await axios.get(`${BASE_URL}/users/${user}/languages`)
    dispatch(gotUSerLanguages(res.data))
  }
}

const gotUSerLanguages = (language) => {
  return {type: LOAD_USER_LANGUAGES, payload: language}
}
export const GetUserLikesResources = (user) => {
  return async (dispatch) => {
    let res = await axios.get(`${BASE_URL}/users/${user}/resources`)
    dispatch(gotUserResources(res.data))
  }
}

const gotUserResources = (user) => {
  return {type: LOAD_USER_RESOURCES, payload: user}
}

export {getUser, LoginUser, logout, RegisternUser}