import { LIKE_RESOURCE, LOAD_RESOURCE, LOAD_RESOURCES, UNLIKE_RESOURCE } from "../Actions/types";

const INITIAL_STATE = {};



function resource(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_RESOURCE:
      return {
        ...state, ...action.payload 
      };

    default:
      return state;
  }
}


function resources(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case LOAD_RESOURCES:
      return {
        ...state, ...action.payload
      };  

    case LIKE_RESOURCE:
      return {
        ...state, ...action.payload
      }  

    case UNLIKE_RESOURCE:
      return {
        ...state
      }  
    default:
      return state;
  }
}

export { resources, resource};


