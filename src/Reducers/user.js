import { LOAD_USER, LOGIN_USER } from "../Actions/types";

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

    default:
      return state;
  }
}

export {user}