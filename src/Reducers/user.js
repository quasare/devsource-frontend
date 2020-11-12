import { LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../Actions/types";

const INITIAL_STATE = {};



function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state, ...action.payload
      }
    case LOAD_USER:
      return {
        ...state, ...action.payload 
      };

    case REGISTER_USER:
      return {
        ...state, ...action.payload
      }

    case LOGOUT_USER:
      return {
        ...INITIAL_STATE
      }  
    default:
      return state;
  }
}

export {user}