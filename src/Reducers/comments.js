import { LOAD_COMMENT } from "../Actions/types";

const INITIAL_STATE = {};

function comments(state = INITIAL_STATE, action) {
    switch (action.type) {
      case LOAD_COMMENT:
        return {
          ...state, ...action.payload 
        };
  
      default:
        return state;
    }
  }

  export {comments}