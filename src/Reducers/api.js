import {LOAD_QUOTE, LOAD_GH, LOAD_VID, LOAD_JOKE } from "../Actions/types";

const INITIAL_STATE = {};


function externalApi(state = INITIAL_STATE, action) {
    switch (action.type) {
      
    case LOAD_GH:
        return {
          ...state, ...action.payload
        };  
    case LOAD_QUOTE:
        return {
        ...state, ...action.payload
            };    
    case LOAD_JOKE:
        return {
        ...state, ...action.payload
            };  
    case LOAD_VID:
        return {
        ...state, ...action.payload
            };                
      default:
        return state;
    }
  }
  
  export {externalApi};
