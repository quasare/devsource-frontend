import { LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, LOAD_USER_LANGUAGES,
LOAD_USER_RESOURCES, LOAD_USER_VIDS, LOGIN_ERROR, REGISTER_ERROR } from "../Actions/types";

const INITIAL_STATE = {};



function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state, ...action.payload
      }
    case LOAD_USER:
      return {
        ...state, ...action.payload, ...{errors: null } 
      };

    case REGISTER_USER:
      return {
        ...state, ...action.payload, ...{errors: null } 
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

    case LOGIN_ERROR:
      return {
        ...state, ...{errors: action.payload}
      }  

    case REGISTER_ERROR:
      return {
        ...state, ...{errors: action.payload}
      }    
    default:
      return state;
  }
}

export {user}