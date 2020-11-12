import { LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "./types";
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

export {getUser, LoginUser, logout, RegisternUser}