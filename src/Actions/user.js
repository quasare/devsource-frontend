import { LOAD_USER, LOGIN_USER, LOGOUT_USER } from "./types";
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

const getUser = (username) => {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL}/users/${username}`);
    dispatch(gotUser(res.data));
  };
}

function gotUser(user) {
    return { type: LOAD_USER, payload: user };
  } 

const logout = () => {
    return {type: LOGOUT_USER }
}

export {getUser, LoginUser, logout}