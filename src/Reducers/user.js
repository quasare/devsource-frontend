import { LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, LOAD_USER_LANGUAGES,
LOAD_USER_RESOURCES, LOAD_USER_VIDS } from "../Actions/types";

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

  case LOAD_USER_RESOURCES:
    return {
      ...state, ...action.payload 
    };  

    case LOAD_USER_LANGUAGES:
      return {
        ...state, ...action.payload 
      };   

    case LOAD_USER_VIDS:
      return {
        ...state, ...action.payload 
      };
    default:
      return state;
  }
}

export {user}